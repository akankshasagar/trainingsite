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

            // Set the user's email to the submission object
            submission.Email = userEmail;


            // Save the submission to the database
            _authContext.Test01.Add(submission);
            await _authContext.SaveChangesAsync();
            return Ok();
        }
    }

}