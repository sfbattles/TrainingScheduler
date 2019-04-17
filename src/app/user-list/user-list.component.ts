import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { IUser } from '../IUser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  constructor(private userService: UserService) { }

  userlist: IUser[];

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAll().subscribe((theuserlist) =>  {
      console.log(theuserlist)
    this.userlist = theuserlist
    })
  }
}
