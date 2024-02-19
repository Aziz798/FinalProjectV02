using FinalProjectV02.Server.Data;
using FinalProjectV02.Server.Models.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FinalProjectV02.Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ProjectController(AppDbContext db) : ControllerBase
{
    private readonly AppDbContext _db = db;

    [HttpPost]
    public async Task<ActionResult<Project>> CreateProject([FromBody] Project project)
    {
        if(project == null)
        {
            return BadRequest(ModelState);
        }
        if(ModelState.IsValid) 
        {
            await _db.AddAsync(project);
            await _db.SaveChangesAsync();
            return Ok(project);
        }
        return BadRequest(ModelState);
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<Project>> GetOneProjectWithTaches([FromHeader] int id)
    {
        var projectFromDb = await _db.Projects.Include(p=>p.Taches).FirstOrDefaultAsync(p=>p.ProjectId == id);
        if(projectFromDb is not null)
        {
            return Ok(projectFromDb);
        }
        return NotFound();
    }
    
   
}
