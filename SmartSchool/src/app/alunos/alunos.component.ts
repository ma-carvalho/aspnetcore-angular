import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo = 'Alunos'; 

  alunos = [
    { nome: 'Maria' }, 
    { nome: 'Marcia' },
    { nome: 'Laura' },
    { nome: 'Isabella' },
    { nome: 'Marcos' }, 
    { nome: 'Lucas' },
    { nome: 'Paulo' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
