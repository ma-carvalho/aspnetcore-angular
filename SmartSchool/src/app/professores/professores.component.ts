import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/professor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public professorForm: FormGroup;
  public titulo = 'Professores';
  public professorSelecionado: Professor;
  public modalRef: BsModalRef;

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

  professorSelect(professor: Professor) {
    this.professorSelecionado = professor; 
    this.professorForm.patchValue(professor);
  }

  voltar() {
    this.professorSelecionado = null;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder,
    private modalService: BsModalService) 
  {
    this.criarForm();
  }

  ngOnInit(): void {
  }

  criarForm() {
    this.professorForm = this.fb.group({
      nome: ['', Validators.required],
      disciplina: ['', Validators.required], 
    });
  }

  professorSubmit() {
    console.log(this.professorForm.value);
  }

}
