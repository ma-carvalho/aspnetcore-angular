using Microsoft.AspNetCore.Mvc;
using SmartSchoolWebAPI.Data;
using SmartSchoolWebAPI.Models;
using System;
using System.Threading.Tasks;

namespace SmartSchoolWebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AlunoController : ControllerBase
    {
        public readonly IRepository  _repository;

        public AlunoController(IRepository repository)
        {
            _repository = repository;

        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var result = await _repository.GetAllAlunosAsync(true);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpGet("{AlunoId}")]
        public async Task<IActionResult> GetAlunoById(int alunoId)
        {
            try
            {
                var result = await _repository.GetAlunoAsyncById(alunoId, true);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpGet("ByDisciplina/{disciplinaId}")]
        public async Task<IActionResult> GetByDisciplinaId(int disciplinaId) {

            try{
                var result = await _repository.GetAlunosAsyncByDisciplinaId(disciplinaId, true);
                return Ok(result);
            } catch(Exception ex){
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(Aluno model) {

            try{
                _repository.Add(model);

                if(await _repository.SaveChangesAsync()) {
                    return Ok(model);
                }
            } catch(Exception ex){
                return BadRequest($"Erro: {ex.Message}");
            }

            return BadRequest();
        }

        [HttpPut("{alunoId}")]
        public async Task<IActionResult> Put(int alunoId,Aluno model) {

            try{

                var aluno = await _repository.GetAlunoAsyncById(alunoId, false);

                if(aluno == null) {
                    return NotFound("Aluno não encontrado!");
                }

                _repository.Update(model);

                if(await _repository.SaveChangesAsync()) {
                    return Ok(model);
                }
            } catch(Exception ex){
                return BadRequest($"Erro: {ex.Message}");
            }

            return BadRequest();
        }

        [HttpDelete("{alunoId}")]
        public async Task<IActionResult> Delete(int alunoId) {

            try{

                var aluno = await _repository.GetAlunoAsyncById(alunoId, false);

                if(aluno == null) {
                    return NotFound("Aluno não encontrado!");
                }

                _repository.Delete(aluno);

                if(await _repository.SaveChangesAsync()) {
                    return Ok(new { message = "Aluno deletado com sucesso!"});
                }
            } catch(Exception ex){
                return BadRequest($"Erro: {ex.Message}");
            }

            return BadRequest();
        }
    }
}