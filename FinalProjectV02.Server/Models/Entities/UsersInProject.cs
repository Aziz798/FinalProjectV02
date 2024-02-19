using System.ComponentModel.DataAnnotations;

namespace FinalProjectV02.Server.Models.Entities;


public class UsersInProject
{
    [Key]
    public int UsersInProjectId { get; set; }
    public int UsersInProjectUserId { get; set; }
    public int ProjectId { get; set; }
    [Required]
    public string UserStatus { get; set; }

    public User? User { get; set; }
    public Project? Project { get; set; }

}
