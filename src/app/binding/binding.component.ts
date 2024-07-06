import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {
  username: string = 'John doe';
  isDisabled: boolean = true;
  inputValue: string = '';

  onInputChange(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }


  isLoggedIn: boolean = false

}
