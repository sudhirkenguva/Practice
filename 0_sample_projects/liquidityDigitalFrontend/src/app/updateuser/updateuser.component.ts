import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  user: any;
  errormessage = "";
  updateUserLoader = false;
  constructor(private router: Router, private apiService: ApiService) {

   }

  ngOnInit() {
    this.user = history.state.data || {};
  }

  updateUser() {
      this.errormessage = "";
      this.updateUserLoader = true;
      this.apiService.updateUser(this.user).subscribe((data) => {
        this.updateUserLoader = false;
        this.router.navigate(['userlisting']);
      }, (err) => {
        console.log(err.error);
        this.updateUserLoader = false;
        this.errormessage = err.error.msg;
      });
  }

  cancel() {
    this.router.navigate(['userlisting']);
  }
}
