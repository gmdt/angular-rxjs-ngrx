import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from '../../../../app/models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent {
  user: User = {
    email: '',
    password: '',
  };

  signinForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(private fb: FormBuilder) {
    this.email = fb.control('', [Validators.email, Validators.required]);
    this.password = fb.control('', [
      Validators.required,
      Validators.minLength(6),
    ]);

    this.signinForm = fb.group({
      email: this.email,
      password: this.password,
    });
  }

  handleSubmit() {
    console.log(this.signinForm.valid);
  }
}
