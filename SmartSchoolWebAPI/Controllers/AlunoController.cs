using Microsoft.AspNetCore.Mvc;
using System;

namespace SmartSchoolWebAPI.Controllers
{   
    [ApiController]
    [Route("[controller]")]
    public class AlunoController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get() {

            try {
                return Ok("Sucesso Aluno");
            }catch(Exception ex) {
                return BadRequest($"Erro: {{ex.Message}}");
            }
        }
        
    }
}