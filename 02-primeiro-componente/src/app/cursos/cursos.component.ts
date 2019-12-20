import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
// Componentes interagem com os usuarios 
// A logica de interação deve estar nos serviços 
export class CursosComponent implements OnInit {
  // Aqui vem o codigo javascript e logica

  nomePortal: string;

  cursos: string[];

  // Injeção de Dependencia!!!
  constructor(private cursosService: CursosService) {
    this.nomePortal = 'http://loiane.training';    
    
    /*for (let i = 0; i < this.cursos.length; i++) {
      let curso = this.cursos[i];
     }*/

    // var servico = new CursosService(); OBS:Instância manual da classe CursosService!

    // Injeção de Dependencia!!!
    this.cursos = this.cursosService.getCursos();


   }

  ngOnInit() {
  }

}
