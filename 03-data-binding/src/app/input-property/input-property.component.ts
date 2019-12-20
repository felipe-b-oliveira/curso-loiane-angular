import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  // Expoe uma propriedade, no caso chamada nome para o seletor app-curso
  // Variavel interna 'nome' variável externa 'nomeCurso'
  @Input('nome') nomeCurso: string = '';

  constructor() { }

  ngOnInit() {
  }

}
