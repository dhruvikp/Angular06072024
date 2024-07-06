import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild(ChildComponent) childComponent: ChildComponent;
  
  
  title = 'my-first-app';

  

  messageFromChild:string;


  receiveMessage(message: string) {
    this.messageFromChild= message;
  }

  callChildComponent() {
    this.childComponent.greet();
  }
}
