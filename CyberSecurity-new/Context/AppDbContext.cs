using CyberSecurity_new.Models;
using Microsoft.EntityFrameworkCore;

namespace CyberSecurity_new.Context
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Test01> Test01 { get; set; }
        public DbSet<CourseEnrollment> CourseEnrollments { get; set; }
        public DbSet<CourseCompleted> courseCompleteds { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("users");
            modelBuilder.Entity<Test01>().ToTable("test01");
            modelBuilder.Entity<CourseEnrollment>().ToTable("coursesEnrolled");
            modelBuilder.Entity<CourseCompleted>().ToTable("coursesCompleted");
        }
    }
}
