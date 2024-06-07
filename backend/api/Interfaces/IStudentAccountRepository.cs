using api.Models;

namespace api.Interfaces
{
    public interface IStudentAccountRepository
    {
        Task<ICollection<StudentAccount>?> GetAllActiveStudents();
        Task<StudentAccount?> GetStudentAccountByTCAsync(string TC);
        Task<StudentAccount?> GetStudentAccountBySSNAsync(int SSN);
        Task<StudentAccount?> CreateStudentAccountAsync(StudentAccount studentAccount);
        Task<StudentAccount?> UpdateStudentAccountAsync(StudentAccount studentAccount);
        Task<StudentAccount?> DeleteStudentAccountAsync(StudentAccount studentAccount);
    }
}