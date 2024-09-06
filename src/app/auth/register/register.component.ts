import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms'; 
import { User } from "../../types"
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) { }
  myForm!: FormGroup;
  ngOnInit(): void {
    this.myForm = this.fb.group(
      {
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        confirmPassword: new FormControl('', [Validators.required])
      },
      {validator: this.checkPasswordsMatch}
    );
  }
  get getErrorLabel() {
    if (this.myForm.errors?.['required']) return 'Les champs sont obligatoires';
    if (!!this.myForm.errors?.['email']) return 'Email doit être valide.';
    if (!!this.myForm.controls?.['password']?.errors?.['minlength']) return `La longueur minimal pour votre mot de passe est ${this.myForm.controls?.['password']?.errors?.['minlength']?.requiredLength}`;
    if (this.myForm.errors?.['missMatch']) return 'Les mots de passe ne correspondent pas';
    return 'Un problème est survenu';
  }
  checkPasswordsMatch(form: FormGroup) {

    return form.get('password')?.value === form.get('confirmPassword')?.value
    ? null
    : {missMatch: true}
  }

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
      this.router.navigate(['/quizz']);
      console.log('Formulaire soumis avec succès', this.myForm.value);
    } else {
      console.log('Formulaire invalide');
    }
  }
}
