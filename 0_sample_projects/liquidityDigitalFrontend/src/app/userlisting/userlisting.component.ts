import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})
export class UserlistingComponent implements OnInit {
  users: any[];
  errMsg: string;
  listLoader : boolean;
  constructor(private router: Router, private apiService: ApiService) {    
  }

  ngOnInit() {
    this.users = [];
    this.listLoader = true;
    this.apiService.getUsers().subscribe(
      (data : any) => {
        this.users = data.users;
        this.listLoader = false;
    }, (err) => {
      this.listLoader = false;
      console.log(err.error);
    });
  }

  navigate(route, userIndex) {
    if(userIndex != undefined) {
      this.router.navigate([route], {state: {data: this.users[userIndex]}});
    } else {
      this.router.navigate([route])
    }
  }


  deleteUser(email) {
    this.apiService.deleteUser(email).subscribe((data) => {
      window.location.reload();
      // this.router.navigate(['userlisting']);
    }, (err) => {
      console.log(err.error);
    });
  }

  logout() {
    this.apiService.logout().subscribe((data) => {
      this.router.navigate(['login']);
    }, (err) => {
      console.log(err.error);
      this.errMsg = "Error in logging out!"
    });
  }

}
