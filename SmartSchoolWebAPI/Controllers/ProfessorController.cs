using Microsoft.AspNetCore.Mvc;

namespace SmartSchoolWebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProfessorController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get(){
            return Ok("teste");
        }
    }
}