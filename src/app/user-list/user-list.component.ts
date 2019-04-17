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

  userListForm = new FormGroup({
    firstName : new FormControl('',Validators.required),
    lastName : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required)
  });
  
  userList: IUser[];

  ngOnInit() {
  }

  getAllUsers() {
    this.userService.getAll().subscribe((userslist) =>  {
      console.log(userslist)
   // this.userList = userslist
    })
  }
}
