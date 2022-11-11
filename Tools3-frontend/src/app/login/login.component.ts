import { catchError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IUser } from './user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  errorMessage: any;
  constructor(private http:HttpClient){}
  user: IUser = {username: '', password: ''};
  currentUser: IUser = { username: '', password: '' };
  sub: any;
  private _signupUrl: string = "http://localhost:8080/admin/signup";
  private _signinUrl: string = "http://localhost:8080/admin/getalladmins";
  allUsers: IUser[] = [];
  signedIn : boolean = false;
  signedUp : boolean = false;
  getAllUsers(){
    this.sub = this.http.get<IUser[]>(this._signinUrl).subscribe({
      next: users => {
        this.allUsers = users;
      },
      error: err => this.errorMessage = err
    });
    console.log(this.allUsers);
  }

  login(uname:string,pwd:string){
    this.getAllUsers();
    for (let I = 0; I < this.allUsers.length; I++) {
      if (this.allUsers[I].username == uname && this.allUsers[I].password == pwd) {
        this.currentUser.username = this.allUsers[I].username;
        this.currentUser.password = this.allUsers[I].password;
        console.log("LOGIN -- user: " + this.currentUser.username + " pwd: " + this.currentUser.password);
        this.signedIn = true;
        break;
      }
    }
  //   this.user.username = uname;
  //   this.user.password = pwd;
  //   const req =this.http.post<IUser>(this._signinUrl,this.user).pipe(
  //     catchError(this.handleError("login",this.user))).subscribe(
  //   );
  //   console.log(req)
  //   console.log("LOGIN -- user: " + this.currentUser.username + " pwd: " + this.currentUser.password)
    
  // }
  // handleError(arg0: string, user: any): (err: any, caught: import("rxjs").Observable<IUser>) => import("rxjs").ObservableInput<any> {
  //   throw new Error('Method not implemented.');
  }
  signup(uname:string,pwd:string){
    this.user.username = uname;
    this.user.password = pwd;
    this.http.post<IUser>(this._signupUrl, this.user).subscribe({
      
    }
    );
    
    console.log("SIGNUP -- user: " + this.currentUser.username + " pwd: " + this.currentUser.password);
  }
  ngOnInit(): void{
    

}
}
