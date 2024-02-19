using FinalProjectV02.Server.Data;
using FinalProjectV02.Server.Models.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FinalProjectV02.Server.Controllers;

[Route("api/tache")]
[ApiController]
public class TacheController (AppDbContext db) : ControllerBase
{
    private readonly AppDbContext _db=db;

    [HttpGet]
  public async Task<ActionResult<List<Tache>>> GetaLL()
    {
        return await _db.Taches.ToListAsync();
    }
    
}