import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor'];



  constructor() { }

  ngOnInit(): void {
  }
  
  borrarItem(){
    
    this.heroes.length = this.heroes.length -1 ;

  }

}
