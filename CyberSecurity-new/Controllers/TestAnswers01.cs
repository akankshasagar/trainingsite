using CyberSecurity_new.Context;
using CyberSecurity_new.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient.Server;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace CyberSecurity_new.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestAnswers01 : ControllerBase
    {
        private readonly AppDbContext _authContext;

        public TestAnswers01(AppDbContext authContext)
        {
            _authContext = authContext;
        }        

        [HttpPost]
        public async Task<IActionResult> SubmitForm([FromBody] Test01 submission)
        {

            if (submission == null)
            {
                return BadRequest("Invalid form submission data");
            }

            var userEmail = HttpContext.User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Email)?.Value;

            if (string.IsNullOrEmpty(userEmail))
            {
                return BadRequest("User email not found in the request");
            }

            var existingSubmission = await _authContext.Test01.FirstOrDefaultAsync(s => s.Email == userEmail);
            if (existingSubmission != null)
            {
                return BadRequest( new { Message = "You have already submitted the form" });
            }

            int marks = CalculateMarks(submission);

            // Set the user's email to the submission object
            submission.Email = userEmail;
            submission.Marks = marks;


            // Save the submission to the database
            _authContext.Test01.Add(submission);
            await _authContext.SaveChangesAsync();
            return Ok(new {Message = $"Your marks: {marks}" });
        }

        private int CalculateMarks(Test01 submission)
        {
            int marks = 0;

            Dictionary<string, string> correctAnswers = new Dictionary<string, string>
    {
                { "Q1", "b" },
                { "Q2", "b" },
                { "Q3", "b" },
                { "Q4", "c" },
                { "Q5", "c" }
            };

            if (submission.Q1 == correctAnswers["Q1"])
            {
                marks++;
            }

            if (submission.Q2 == correctAnswers["Q2"])
            {
                marks++;
            }

            if (submission.Q3 == correctAnswers["Q3"])
            {
                marks++;
            }

            if (submission.Q4 == correctAnswers["Q4"])
            {
                marks++;
            }

            if (submission.Q5 == correctAnswers["Q5"])
            {
                marks++;
            }

            return marks;


        }
    }

}