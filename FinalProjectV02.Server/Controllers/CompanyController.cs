﻿using FinalProjectV02.Server.Data;
using FinalProjectV02.Server.Models.Entities;
using FinalProjectV02.Server.Models.LoginModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace FinalProjectV02.Server.Controllers
{
    [Route("api/company")]
    [ApiController]
    public class CompanyController(AppDbContext db, ILogger<CompanyController> logger) : ControllerBase
    {
        private readonly ILogger<CompanyController> _logger = logger;
        private readonly AppDbContext _db = db;
        
   
        [HttpPost("register"),DisableRequestSizeLimit]
        public async Task<ActionResult<string>> RegisterAsCompany([FromBody] Company company)
        {
            if (ModelState.IsValid)
            {
                var existingUser = await _db.Companies.FirstOrDefaultAsync(u => u.CompanyEmail == company.CompanyEmail);
                if (existingUser == null)
                {

                    PasswordHasher<Company> Hasher = new();
                    company.CompanyPassword = Hasher.HashPassword(company, company.CompanyPassword);
                    await _db.Companies.AddAsync(company);
                    await _db.SaveChangesAsync();
                    var token = GenerateJwtToken(company.CompanyId);
                    return Ok(new { Token = token });
                }
                return BadRequest("Company with this email already exists.");

            }
            return BadRequest(ModelState);
        }
        [HttpPost("login")]
        public async Task<ActionResult<Company>> LoginAsCompany([FromBody] LoginModel login)
        {
            _logger.LogInformation("Login Started");
            if (ModelState.IsValid)
            {
                var companyFromDb = await _db.Companies.FirstOrDefaultAsync(c => c.CompanyEmail == login.LoginEmail);
                if (companyFromDb == null)
                {
                    return BadRequest("Company Doesn't exist try registring");
                }
                PasswordHasher<LoginModel> hasher = new();
                var result = hasher.VerifyHashedPassword(login, companyFromDb.CompanyPassword, login.LoginPassword);
                if (result == 0)
                {
                    return BadRequest("Password is wrong");
                }
                var token = GenerateJwtToken(companyFromDb.CompanyId);
                return Ok(new { Token = token });
            }
            return BadRequest(ModelState);
        }
        private string GenerateJwtToken(int userId)
        {
            var tokenHandler = new JwtSecurityTokenHandler();


            var key = Encoding.ASCII.GetBytes("adahfijvdsop4652316865412345@sdnsdkclkcsdn");

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("id", userId.ToString()) }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

    }
}
