import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  today: Date = new Date();

  message:string = 'Hello simplilearn!'

  pi:number = 3.1415927;

  price: number = 1234.56;

}
