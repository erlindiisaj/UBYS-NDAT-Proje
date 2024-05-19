using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class LecturerAccount : UserAccount
    {
        public int LecturerSSN { get; set; }
        public string? Title { get; set; }
        public float TotalWorkHours { get; set; }
        public string? CurrentStatus { get; set; }
    }
}