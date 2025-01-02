using CyberSecurity_new.Context;
using CyberSecurity_new.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CyberSecurity_new.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IWebHostEnvironment _environment;

        public CoursesController(AppDbContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

        [HttpPost("AddCourse")]
        public async Task<IActionResult> AddCourse([FromForm] Course addcourseObj, [FromForm] IFormFile file)
        {

            if (addcourseObj == null)
                return BadRequest(new { Message = "Invalid Course data!" });

            if (string.IsNullOrWhiteSpace(addcourseObj.CourseName) || string.IsNullOrWhiteSpace(addcourseObj.CourseDescription))
                return BadRequest(new { Message = "Course_Name and Course_Description are required!" });

            if (file == null)
                return BadRequest(new { Message = "A file is required!" });

            try
            {
                string fileName = Path.GetFileNameWithoutExtension(file.FileName) + "_" + Guid.NewGuid().ToString() + Path.GetExtension(file.FileName);
                string uploadPath = Path.Combine(_environment.WebRootPath, "uploads");

                if (_context == null || _environment == null)
                    throw new NullReferenceException("Required services are not initialized.");


                if (!Directory.Exists(uploadPath))
                    Directory.CreateDirectory(uploadPath);

                string filePath = Path.Combine(uploadPath, fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }

                addcourseObj.FilePath = fileName;

                await _context.Courses.AddAsync(addcourseObj);
                await _context.SaveChangesAsync();

                return Ok(new { Message = "Course added successfully!", FilePath = filePath });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Message = ex.InnerException?.Message ?? ex.Message });
            }


        }

    }
}
