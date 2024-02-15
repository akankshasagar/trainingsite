import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastModule, NgToastService, Position } from 'ng-angular-popup';
import { ToastrService } from 'ngx-toastr';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';
import { UserstoreService } from 'src/app/services/userstore.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  loginForm!: FormGroup;
  signupForm!: FormGroup;
  forgotPassword!: FormGroup;
  start: boolean = false;
  showPassword: boolean = false;
  forshowPassword: boolean = false;

  hide = true;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private toastr: ToastrService, private userStore: UserstoreService) {
    // this.initializeForms();

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.forgotPassword = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  togglePasswordVisibilityfor(){
    this.forshowPassword = !this.forshowPassword;
  }
  
  onSubmit(){
    if(this.forgotPassword.valid){
      // console.log(this.signupForm.value);
      this.auth.forgot(this.forgotPassword.value)
      .subscribe({
        next:(res => {
          this.toastr.success(res.message);
          // alert(res.message);
          this.forgotPassword.reset();
          this.router.navigate(['homepage/signin']);
        })
        ,error:(err => {
          this.toastr.error(err?.error.message);
          // alert(err?.error.message)
        })
      })
    }
    else{
      ValidateForm.validateAllFormFields(this.forgotPassword);
      // alert("Your Form is invalid");
      this.toastr.error("Your Form is invalid");
    }
  }

  onLogin() {
    if (this.loginForm.valid) {

      // console.log(this.loginForm.value);
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res) =>{
          this.loginForm.reset();
          this.auth.storeToken(res.token); 
          const tokenPayload = this.auth.decodeToken();
          this.userStore.setFullNameForStore(tokenPayload.name);
          this.toastr.success(res.message);          
          this.router.navigate(['courses']);
        },
        error:(err)=>{
          this.toastr.error(err?.error.message);
          // alert(err?.error.message);
        }
      })
      //send the obj to database
    }
    else {
      
      ValidateForm.validateAllFormFields(this.loginForm);
      this.toastr.error("Your Form is Invalid!");
      // alert("Your form is invalid");
      //throw the error 
    }
  }

  Start(){
    this.start = true;
  }

  closeCard() {
    this.start = false;
  }
}
