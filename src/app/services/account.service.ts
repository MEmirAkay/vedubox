import { Injectable } from '@angular/core';
import { User } from 'src/app/components/login/user';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  login(user:User):boolean{
    if(user.username == "emir" && user.password == "12345"){
      alert("logged in");
      return true
    }else{
      alert("wrong username or password")
      return false
    }
  }
}
