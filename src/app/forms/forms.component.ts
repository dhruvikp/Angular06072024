import { Component, ViewChild, viewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  @ViewChild("f") form:NgForm;

  submitted:boolean = false;

  user = {
    username: '',
    email: '',
    secret: ''
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form)

    this.user.username = this.form.form.value.userData.username;
    this.user.email = this.form.form.value.userData.email;
    this.user.secret = this.form.form.value.userData.secret;

    this.form.form.reset();

  }

  suggestUserName() {
    const suggestedName:string = 'superuser';

    this.form.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }
  


}
