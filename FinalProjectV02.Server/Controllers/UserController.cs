using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FinalProjectV02.Server.Data;
using Microsoft.IdentityModel.Tokens;
using FinalProjectV02.Server.Models.Entities;
using FinalProjectV02.Server.Models.LoginModels;
using Microsoft.AspNetCore.Identity;

namespace FinalProjectV02.Server.Controllers;

[Route("api/user")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly AppDbContext _db;

    public UserController(AppDbContext db)
    {
        _db = db;
    }

    [HttpPost("register")]
    public async Task<ActionResult<string>> Registration([FromBody]User user)
    {
        if (ModelState.IsValid)
        {
            var existingUser = await _db.Users.FirstOrDefaultAsync(u => u.UserEmail == user.UserEmail);
            if (existingUser == null)
            {
                PasswordHasher<User> Hasher = new();
                user.UserPassword = Hasher.HashPassword(user, user.UserPassword);
                await _db.Users.AddAsync(user);
                await _db.SaveChangesAsync();
                var token = GenerateJwtToken(user.UserId);
                return Ok(new { Token = token });
            }
            else
            {
                return BadRequest("User with this email already exists.");
            }
        }
        else
        {
            return BadRequest(ModelState);
        }
    }
    [HttpPost("login")]
    public async Task<ActionResult<string>> Login([FromForm]LoginModel loginUser)
    {
        if (ModelState.IsValid)
        {
            var userFromDb = await _db.Users.FirstOrDefaultAsync(u => u.UserEmail == loginUser.LoginEmail);
            if (userFromDb == null)
            {
                return BadRequest("User doesn't exist try Register");
            }
            else
            {
                PasswordHasher<LoginModel> hasher = new();
                var result = hasher.VerifyHashedPassword(loginUser, userFromDb.UserPassword, loginUser.LoginPassword);
                if (result == 0)
                {
                    return BadRequest("Password is wrong");
                }
                var token = GenerateJwtToken(userFromDb.UserId);
                return Ok(new { Token = token });
            }
        }
        return BadRequest(ModelState);
    }
    [HttpGet("all")]
    public async Task<ActionResult<IEnumerable<User>>> GetAllUsers()
    {
        var users = await _db.Users.ToListAsync();
        return Ok(users);
    }


    private string GenerateJwtToken(int userId)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes("adahfijvdsop4652316865412345@sdnsdkclkcsdn");
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity([new Claim("id", userId.ToString())]),
            Expires = DateTime.UtcNow.AddDays(7),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };
        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }
}
