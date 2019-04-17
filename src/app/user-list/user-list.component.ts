import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { IUser } from '../IUser';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  searchForm = new FormGroup({
    query: new FormControl('')
  })
  constructor(private userService: UserService) { }

  userList: IUser[];
  query = '';

  ngOnInit() {
   
    this.getAllUsers();
    this.searchForm.get('query').valueChanges.pipe(debounceTime(350)).subscribe(  //allows you to see the value change
      (value) => {
        console.log(value);
        this.query = value;
        this.getAllUsers();
       });
  }

  getAllUsers() {
    this.userService.get(this.query).subscribe((theuserlist) =>  {
      console.log(theuserlist);
      this.userList = theuserlist;  
    })
  }
}
