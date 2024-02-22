using FinalProjectV02.Server.Data;
using FinalProjectV02.Server.Models.Entities;
using FinalProjectV02.Server.Models.LoginModels;
using FinalProjectV02.Server.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace FinalProjectV02.Server.Controllers;

[Route("api/user")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly AppDbContext _db;
    private readonly IManageFiles _iManageFiles;
    public UserController(AppDbContext db, IManageFiles iManageFiles)
    {
        _db = db;
        _iManageFiles = iManageFiles;
    }

    [HttpPost("register")]
    public async Task<ActionResult<string>> Registration(RegisterUser user)
    {
        User registratedUser = new();
        if (ModelState.IsValid)
        {
            var existingUser = await _db.Users.FirstOrDefaultAsync(u => u.UserEmail == user.UserEmail);
            if (existingUser == null)
            {
                string pathOfCompanyLogo = await _iManageFiles.UploadFile(user.UserPhoto);
                registratedUser.FirstName = user.FirstName;
                registratedUser.LastName = user.LastName;
                registratedUser.UserEmail = user.UserEmail;
                registratedUser.UserRole = user.UserRole;
                registratedUser.UserPassword = user.UserPassword;
                registratedUser.ConfirmPassword = user.ConfirmPassword;
                registratedUser.CompanyId = user.CompanyId;
                registratedUser.RoleId = user.RoleId;
                registratedUser.UserPhoto = pathOfCompanyLogo;
                PasswordHasher<User> Hasher = new();
                user.UserPassword = Hasher.HashPassword(registratedUser, user.UserPassword);
                await _db.Users.AddAsync(registratedUser);
                await _db.SaveChangesAsync();
                var token = GenerateJwtToken(registratedUser.UserId);
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
    public async Task<ActionResult<string>> Login([FromForm] LoginModel loginUser)
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
        return Ok(await _db.Users.ToListAsync());
    }
    [HttpPut("{id}")]
    public async Task<ActionResult<User>> UpdateUser([FromBody] User user, [FromHeader] int id)
    {
        var userFromDb = await _db.Users.SingleOrDefaultAsync(u => u.UserId == id);
        if (userFromDb == null)
        {
            return NotFound();
        }
        if (ModelState.IsValid)
        {
            userFromDb.FirstName = user.FirstName;
            userFromDb.LastName = user.LastName;
            userFromDb.UserEmail = user.UserEmail;
            userFromDb.UserPassword = user.UserPassword;
            userFromDb.CompanyId = user.CompanyId;
            userFromDb.RoleId = user.RoleId;
            userFromDb.UpdatedAt = DateTime.Now;
            await _db.SaveChangesAsync();
            return Ok(userFromDb);
        }
        return BadRequest(ModelState);
    }
    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteUser([FromHeader] int id)
    {
        var userFromDb = await _db.Users.SingleOrDefaultAsync(u => u.UserId == id);
        if (userFromDb == null)
        {
            return NotFound();
        }
        _db.Users.Remove(userFromDb);
        await _db.SaveChangesAsync();
        return Ok();
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
