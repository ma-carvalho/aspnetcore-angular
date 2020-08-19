import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/aluno';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public alunoForm: FormGroup;
  public titulo = 'Alunos'; 
  public alunoSelecionado: Aluno; 
  public textoSimples: string;

  alunos = [
    { id: 1, nome: 'Maria', sobrenome: 'Carvalho', telefone:  54465656 }, 
    { id: 2, nome: 'Marcia', sobrenome: 'Matos', telefone:  5656565 },
    { id: 3, nome: 'Laura', sobrenome: 'Machado', telefone:  9898989 },
    { id: 4, nome: 'Isabella', sobrenome: 'Alvares', telefone:  89561212 },
    { id: 5, nome: 'Marcos', sobrenome: 'José', telefone:  78765565 }, 
    { id: 6, nome: 'Lucas', sobrenome: 'Camargo', telefone:  986565656 },
    { id: 7, nome: 'Paulo', sobrenome: 'Rosa', telefone:  1235656 }
  ];

  alunoSelect(aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar() {
    this.alunoSelecionado = null;
  }

  constructor(private fb: FormBuilder) 
  {
    this.criarForm();
  }

  ngOnInit(): void {
  }

  criarForm() {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  alunoSubmit() {
    console.log(this.alunoForm.value);
  }

}
