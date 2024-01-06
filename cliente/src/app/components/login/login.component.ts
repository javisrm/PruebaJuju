import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  titulo = "login"
  email= 'test@.com'
  password= '123456'
  

  constructor(private fb: FormBuilder,
     ){
    this.loginForm= this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],      
    }) 
    
  }

  ngOnInit(): void {
    
  }

  login(){
      const LOGIN: Libro={
      email: this.loginForm.get('email')?.value,
      password:  this.loginForm.get('password')?.value,      
    }
}
}
