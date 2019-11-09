import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  errormessage: string;
  constructor(private router: Router, private apiService: ApiService) {
    this.errormessage = "";
  }

  login() {
    this.errormessage = "";
    this.apiService.login({ username: this.username, password: this.password }).subscribe((data) => {
      this.router.navigate(['userlisting']);
    }, (err) => {
      console.log(err.error);
      this.errormessage = err.error;
    });
  }

  ngOnInit() {
  }

}
