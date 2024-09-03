import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private userService: UserService
  ) { }
  myForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  onSubmit() {
    if (this.myForm.valid) {
      if(
          typeof( this.myForm.value.email) == "string"
          && typeof( this.myForm.value.password) == "string"
      ){
        if(this.userService.checkPassword(this.myForm.value.password))
        {
          this.userService.connect();
          console.log('logged');
        }
      }
     
    } else {
      console.log('invalid');
    }
  }
}
