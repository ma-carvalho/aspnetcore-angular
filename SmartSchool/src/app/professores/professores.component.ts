import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/professor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProfessorService } from './professor.service';

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
  public modo = 'post';

  professores = [];

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
    private modalService: BsModalService,
    private professorService: ProfessorService) 
  {
    this.criarForm();
  }

  ngOnInit(): void {
    this.carregarProfessores();
  }

  criarForm() {
    this.professorForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      // disciplina: ['', Validators.required], 
    });
  }

  carregarProfessores() {
    this.professorService.getAll().subscribe(
      (professores: Professor[]) => {
        this.professores = professores;
      },
      (erro: any) => {
        console.log(erro);
      }
    ) 
  }

  salvarProfessor(professor: Professor) {
    (professor.id == 0) ? this.modo = 'post' : this.modo = 'put';

    this.professorService[this.modo](professor).subscribe(
      (retorno: Professor) => {
        console.log(retorno);
        this.carregarProfessores();
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

  cadastrarProfessor() {
    this.professorSelecionado = new Professor(); 
    this.professorForm.patchValue(this.professorSelecionado);
  }
  
  professorSubmit() {
    this.salvarProfessor(this.professorForm.value);
  }
}
