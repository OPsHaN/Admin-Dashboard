import { Output, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Name: RegExp = /^[a-zA-Z]{4,10}(@)(gmail|yahoo)(.com)$/;
  Password: RegExp = /^[0-9]{7,20}$/;
  NameError?: string;
  PasswordError?: string;

@Output() email:string='' ;
password:string='';

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
  login(){
    if(this.email=='' || !this.Name.test(this.email)){
    alert('please enter your email like : example@gmail.com');
    return ;
  }

  if(this.password=='' || !this.Password.test(this.password)){
    alert('please enter correct password ');
    return;
  }
  this.auth.login(this.email, this.password);
  this.email= '';
  this.password= '';
}


checkname(name: any) {
  console.log(this.NameError);

  if (!this.Name.test(name)) {
    this.NameError = 'Try Again like example@gmail.com';
  }
  else {
    this.NameError=undefined;
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
}
