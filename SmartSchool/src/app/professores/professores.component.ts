import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';

  professorSelecionado: string;

  professores = [
    { id: 1, nome: 'Mario', disciplina: 'Matemática' },
    { id: 2, nome: 'Carlos', disciplina: 'Português' },
    { id: 3, nome: 'Maria', disciplina: 'História' },
    { id: 4, nome: 'Amanda', disciplina: 'Inglês' },
    { id: 5, nome: 'Matheus', disciplina: 'Física' },
    { id: 6, nome: 'Efrain', disciplina: 'Química' },
    { id: 7, nome: 'Elen', disciplina: 'Robótica' },
    { id: 8, nome: 'Helena', disciplina: 'Programação' },
  ];

  professorSelect(professor: any) {
    this.professorSelecionado = professor.nome; 
  }

  voltar() {
    this.professorSelecionado = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
