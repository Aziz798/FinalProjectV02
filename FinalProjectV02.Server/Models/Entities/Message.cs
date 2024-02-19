﻿using System.ComponentModel.DataAnnotations;

namespace FinalProjectV02.Server.Models.Entities;

public class Message
{
    [Key]
    public int MessageId { get; set; }
    [Required]
    public int ProjectId { get; set; }
    [Required]
    public int UserMessageId { get; set; }
    [Required]
    public string MessageContent { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public Project? Project { get; set; }
    public User? User { get; set; }


}
