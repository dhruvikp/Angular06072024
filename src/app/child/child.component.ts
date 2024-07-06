import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

   @Input() messageFromParent: string ;
   @Output() messageToParent = new EventEmitter<string>();

   receivedMessage: string;
   sendMessage() {
    this.messageToParent.emit('Hello From Child!!');
   }

   greet() {
    console.log('Hello from child component!');
   }

}
