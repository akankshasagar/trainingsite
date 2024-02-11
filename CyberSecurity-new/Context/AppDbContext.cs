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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("users");
            modelBuilder.Entity<Test01>().ToTable("test01");
        }
    }
}
