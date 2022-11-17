import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  Email: RegExp = /^[a-zA-Z]{4,10}(@)(gmail|yahoo)(.com)$/;
  Password: RegExp = /^[0-9]{7,20}$/;
  EmailError?: string;
  PasswordError?: string;

  email:string='' ;
  password:string='';


  constructor(private router:Router , private auth:AuthService) { }

  ngOnInit(): void {
  }

checkname(email: any) {

  if (!this.Email.test(email)) {
    this.EmailError = 'Try Again like example@gmail.com';
  }
  else {
    this.EmailError=undefined;
  }
}
checkpass(password: any) {
  if (!this.Password.test(password)) {
    this.PasswordError ="password should contain more than 7 characters"
  }
  else {
    this.PasswordError = undefined;
  }

}
register(){
  if(this.email=='' || !this.Email.test(this.email)){
  alert('please enter your email like : example@example.com');
  return;
}

if(this.password=='' || !this.Password.test(this.password)){
  alert('please enter your password');
  return;
}
this.auth.register(this.email, this.password);
this.email= '';
this.password= '';
}


}
