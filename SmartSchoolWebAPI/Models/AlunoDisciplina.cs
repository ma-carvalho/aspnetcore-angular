namespace SmartSchoolWebAPI.Models
{
    public class AlunoDisciplina
    {
        public AlunoDisciplina() {}

        public AlunoDisciplina(int alunoID, Aluno aluno)
        {
            this.AlunoId = alunoID;
            this.Aluno = aluno;
            
        }
        public int AlunoId { get; set; }
        public Aluno Aluno { get; set; }
        public int DisciplinaId { get; set; }
        public Disciplina Disciplina { get; set; }
    }
}