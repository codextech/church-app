import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

usertoken: any;
decodedtoken: any = '';
jwtHelper: JwtHelperService = new JwtHelperService();


constructor(private http: HttpClient) { }

userLogIn(model) {
return this.http.post<any>(environment.apiUrl + 'api/auth/login', model).pipe(
  map(result => {
    if (result) {
      localStorage.setItem('access_token', result.data); // data is token
      this.decodedtoken = this.jwtHelper.decodeToken(result.data);
      this.usertoken = result.data;
    }
  })
);
}


  // get role

  public get isAdmin(): boolean {
    return (this.decodedtoken.isAdmin);
  }

  public get getGroupId() {
    return (this.decodedtoken.groupId);
  }

  public get getUserId() {
    return (this.decodedtoken.userId);
  }
}
