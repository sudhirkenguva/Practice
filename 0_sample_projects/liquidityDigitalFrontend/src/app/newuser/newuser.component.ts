import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  user: any;
  errMsg: string;
  successMsg: string;
  saveUserLoader: boolean;
  constructor(private router: Router, private apiService: ApiService) {
    this.user = {};
    this.errMsg = "";
    this.successMsg = "";    
  }

  ngOnInit() {
  }

  saveUser() {
    if(!this.user.firstname || !this.user.lastname || !this.user.email || !this.user.phno || !this.user.dept) {
      this.successMsg = "";
      this.errMsg = "Empty fields are not allowed";
      return;
    }
    this.saveUserLoader = true;
    this.apiService.createUser(this.user).subscribe((data) => {
      this.router.navigate(['userlisting']);
      this.saveUserLoader = false;
    }, (err) => {
      console.log(err.error);
      this.saveUserLoader = false;
      this.errMsg = err.error.err;
    });
  }

  cancel() {
    this.router.navigate(['userlisting']);
  }

}
