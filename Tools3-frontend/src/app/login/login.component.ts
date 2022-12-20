import { Component } from '@angular/core';
import { IUser } from './user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: any;
  constructor(private http: HttpClient) { }
  user: IUser = { username: '', password: '' };
  currentUser: IUser = { username: '', password: '' };
  sub: any;
  private _signupUrl: string = "https://backend-tools.apps.eu410.prod.nextcle.com/admin/signup";
  private _signinUrl: string = "https://backend-tools.apps.eu410.prod.nextcle.com/admin/signin";
  allUsers: IUser[] = [];
  signedIn: boolean = false;
  signedUp: boolean = false;
  wrongCredentials: boolean = false;
  duplicateCredentials: boolean = false;

  getAllUsers() {
    this.sub = this.http.get<IUser[]>(this._signinUrl).subscribe({
      next: users => {
        this.allUsers = users;
      },
      error: err => this.errorMessage = err
    });
    console.log(this.allUsers);
  }

  login(uname: string, pwd: string) {
    this.user.username = uname;
    this.user.password = pwd;
    const req = this.http.post<IUser>(this._signinUrl, this.user).subscribe({
      next: user => {
        if (user == null) {
          this.wrongCredentials = true;
          this.duplicateCredentials = false;
          this.signedUp = false;
          this.signedIn = false;
        }
        else {
          this.currentUser.username = user.username;
          this.currentUser.password = user.password;
          console.log("LOGIN -- user: " + this.currentUser.username + " pwd: " + this.currentUser.password);
          this.signedIn = true;
          this.signedUp = false;
          this.wrongCredentials = false;
          this.duplicateCredentials = false;
        }
      }
    });
    console.log(req)
    console.log("LOGIN -- user: " + this.currentUser.username + " pwd: " + this.currentUser.password)

  }
  handleError(arg0: string, user: any): (err: any, caught: import("rxjs").Observable<IUser>) => import("rxjs").ObservableInput<any> {
    throw new Error('Method not implemented.');
  }
  signup(uname: string, pwd: string) {
    this.user.username = uname;
    this.user.password = pwd;
    this.http.post<IUser>(this._signupUrl, this.user).subscribe({
      next: user => {
        this.currentUser.username = user.username;
        this.currentUser.password = user.password;
        console.log("SIGNUP -- user: " + this.currentUser.username + " pwd: " + this.currentUser.password);
        this.signedUp = true;
        this.signedIn = false;
        this.wrongCredentials = false;
        this.duplicateCredentials = false;
      },
      error: err => {
        this.errorMessage = err;
        this.signedUp = false;
        this.signedIn = false;
        this.duplicateCredentials = true;
        this.wrongCredentials = false;
        console.log("Error Signing Up: " + this.errorMessage);
      }

    }
    );
  }
}
