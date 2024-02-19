using System.ComponentModel.DataAnnotations;
using System.Security.Principal;

namespace FinalProjectV02.Server.Models.Entities;

public class Project

{
    [Key]
    public int ProjectId { get; set; }

    [Required]

    public int OwnerId { get; set; }

    [Required]

    [MinLength(10, ErrorMessage = "Project Description must be at least 10 characters")]

    public string ProjectDescription { get; set; }

    [Required]
    public TimeSpan ProjectDuration { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;

    public DateTime UpdatedAt { get; set; } = DateTime.Now;
    public List<Message> Messages { get; set; } = new List<Message>();
    public List<Tache> Taches { get; set; } = new List<Tache>();
    public List<UsersInProject> UsersInProjects { get; set; }= new List<UsersInProject>();
    public Company? Company { get; set; } 
    public User? Owner { get; set; } 



}

