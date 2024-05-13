using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTO.loginDtos
{
    public class LogInInfoPostDto
    {
        [Required]
        [MinLength(11)]
        [MaxLength(11)]
        public String TC {get; set; }
        [Required]
        [MinLength(8)]
        public String Password {get; set; }
        [Required]
        public int UserId { get; set; }
    }
}