import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  model: User = new User()

  constructor(private accountService : AccountService) {
    
   }

  login(form: NgForm):void{
    this.accountService.login(this.model);
    return alert("hello");
  }


  ngOnInit(): void {
    
  }

}
