import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';

  professores = [
    { nome: 'Mario' },
    { nome: 'Carlos' },
    { nome: 'Maria' },
    { nome: 'Amanda' },
    { nome: 'Matheus' },
    { nome: 'Efrain' },
    { nome: 'Elen' },
    { nome: 'Helena' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
