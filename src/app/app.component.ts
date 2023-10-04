import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
  //propriedades
  title = 'ScheduEase Agenda';

  // É uma função específica do Angular
  // ela carrega primeiro ao carregar a tela
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
