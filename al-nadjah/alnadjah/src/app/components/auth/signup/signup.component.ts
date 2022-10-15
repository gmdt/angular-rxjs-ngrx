import { Component } from '@angular/core';
import { User } from '../../../../app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };

  ngOnInit(): void {}

  handleSubmit() {
    console.log('User : ', this.user);
  }
}
