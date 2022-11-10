import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  username: string ="";
  password: string ="";

  login(uname:string,pwd:string){
    console.log("LOGIN -- user: " + uname + " pwd: " + pwd);
  }
  signup(uname:string,pwd:string){
    console.log("SIGNUP -- user: " + uname + " pwd: " + pwd);
  }
}
