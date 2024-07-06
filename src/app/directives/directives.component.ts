import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  public users = ['john','alex','scott','bob'];


  public userRole = 'user1111';


  isLoggedIn: boolean = false;

  public name: string =  'Dhruvik';


  public progress: number = 50;

  getProgressBarStyles() {
    return {
      'width.%': this.progress,
      'background-color': this.progress >=50 ? 'green': 'red',
      'height': '20px',
      'margin-top': '10px'
    }
  }
  


  public items = [
    {id: 1, name: 'Item 1', type:'success'},
    {id: 1, name: 'Item 2', type:'warning'},
    {id: 1, name: 'Item 3', type:'error'},
  ]



}
