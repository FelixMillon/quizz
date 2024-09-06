import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; 
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import { User } from  '../../types'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) { }
  myForm!: FormGroup;

  ngOnInit(): void {
    this.myForm = this.fb.group(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(4)])
      }
    );
  }

  onSubmit() {
    if (this.myForm.valid) {
      if(
          typeof( this.myForm.value.email) == "string"
          && typeof( this.myForm.value.password) == "string"
      ){
        this.userService.login({
          name: this.myForm.value.name,
          email: this.myForm.value.email,
          password: this.myForm.value.password
        }).subscribe((user: User) => {
          console.log(user)
          if (
            user.email != this.myForm.value.email
            || user.password != this.myForm.value.password
          ) alert('Erreur dans le pseudo ou le mot de passe');
          else{
            this.router.navigate(['/']);
          }
        }
      )
      }
     
    } else {
      console.log('invalid');
    }
  }
}
