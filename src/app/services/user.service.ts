import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../components/login/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  private apiPath:string = "User";

  addNewUser(user:User):Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/${this.apiPath}`,user);
  }


}
