import { User } from './user.model';
import { LoginService } from './login.servide';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup

  constructor(private fb: FormBuilder,private loginService: LoginService) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),

    })
  }

  login(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
                      .subscribe(user =>console.log(user) )
  }

}
