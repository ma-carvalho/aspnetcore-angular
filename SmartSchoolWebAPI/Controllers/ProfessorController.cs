using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SmartSchoolWebAPI.Data;
using SmartSchoolWebAPI.Models;

namespace SmartSchoolWebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProfessorController : ControllerBase
    {
        private readonly IRepository _repository;

        public ProfessorController(IRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> Get(){
            
            try
            {
                var professor = await _repository.GetAllProfessoresAsync(true);
                return Ok(professor);

            } catch (Exception ex) 
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpGet("{professorId}")]
        public async Task<IActionResult> GetProfessorById(int professorId) {

            try
            {
                var professor = await _repository.GetProfessorAsyncById(professorId, false);
                return Ok(professor);

            } catch(Exception ex) 
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpGet("ByAluno/{alunoId}")]
        public async Task<IActionResult> GetAlunoById(int alunoId) {

            try
            {
                var professor = await _repository.GetProfessoresAsyncByAlunoId(alunoId, false);
                
                if(professor is null) {
                    return BadRequest("Professor não encontrado");
                }
                return Ok(professor);

            } catch(Exception ex) 
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(Professor model) {
            
            try{
                _repository.Add(model);

                if(await _repository.SaveChangesAsync()) {
                    return Ok(model);
                }
            } catch(Exception ex){
                return BadRequest($"Erro: {ex.Message}");
            }

            return BadRequest("teste");
        }

        [HttpPut("{profesorId}")]
        public async Task<IActionResult> Put(int profesorId, Professor model) {

            try
            {
                var professor = await _repository.GetProfessorAsyncById(profesorId, false);

                if(professor is null) {
                    return NotFound("Professor não encontrado!");
                }

                _repository.Update(model);

                if(await _repository.SaveChangesAsync()) {
                    return Ok(model);
                }

            } catch(Exception ex) 
            {
                return BadRequest($"Erro: {ex.Message}");
            }
            return BadRequest();
        }

        [HttpDelete("{professorId}")]
        public async Task<IActionResult> Delete(int professorId) {

            try
            {
                var professor = await _repository.GetProfessorAsyncById(professorId, false);

                if(professor is null) {
                    return NotFound("Professor não encontrado!");
                }

                _repository.Delete(professor);

                if(await _repository.SaveChangesAsync()) {
                    return Ok("Professor excluído com sucesso!");
                }
                
            } catch(Exception ex) 
            {
                return BadRequest($"Erro: {ex.Message}");
            }
            return BadRequest();
        }
    }
}