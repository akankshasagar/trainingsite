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

        /*[HttpPost]
        public IActionResult GetUser()
        {
            // Get the user's email from the claims
            var userEmail = User.FindFirst(ClaimTypes.Email)?.Value;

            if (userEmail != null)
            {
                // Return user details
                var userDetails = new { email = userEmail };
                return Ok(userDetails);
            }
            else
            {
                return NotFound(); // User details not found
            }
        }*/

        /*[HttpPost] //getting error
        public IActionResult SubmitForm(Test01 submission)
        {
            try
            {
                _authContext.Test01.Add(submission);
                _authContext.SaveChanges();
                return Ok("Form Data Saved");
            }
            catch (Exception ex)
            {
                return StatusCode(500, "An error occured while saving data");
            }
        }*/





        [HttpPost]
        public async Task<IActionResult> SubmitForm([FromBody] Test01 submission)
        {

            if (submission == null)
            {
                return BadRequest("Invalid form submission data");
            }

            // Save the submission to the database
            _authContext.Test01.Add(submission);
            await _authContext.SaveChangesAsync();
            return Ok();
        }




        /*[HttpPost]
        public async Task<ActionResult<Test01>> PostFormData(Test01 formEntry)
        {
            _authContext.Test01.Add(formEntry);
            await _authContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetFormData), new { id = formEntry.Id }, formEntry);
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Test01>> GetFormData(int id)
        {
            var formEntry = await _authContext.Test01.FindAsync(id);

            if (formEntry == null)
            {
                return NotFound();
            }

            return formEntry;
        }*/
    }

}