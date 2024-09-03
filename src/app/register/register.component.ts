import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { User } from "../types"
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(
    private userService: UserService
  ) { }
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  onSubmit() {
    if (this.myForm.valid) {
      if(
          typeof( this.myForm.value.email) == "string"
          && typeof( this.myForm.value.name) == "string"
          && typeof( this.myForm.value.password) == "string"
      ){
        let data: User = {
          name: this.myForm.value.name,
          email: this.myForm.value.email,
          password: this.myForm.value.password
        }
        this.userService.register(data)
        this.userService.connect();
      }
      console.log('Formulaire soumis avec succès', this.myForm.value);
    } else {
      console.log('Formulaire invalide');
    }
  }
}
