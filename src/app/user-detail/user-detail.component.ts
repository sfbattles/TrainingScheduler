import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { IUser } from '../IUser';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
})
export class UserDetailComponent implements OnInit {

  constructor(private userService: UserService,
    private activeRoute: ActivatedRoute,
    private toastr: ToastrService,
    public router: Router) { }

  showSuccess(newUser) {
    const { email } = newUser;
    this.toastr.success(`Sucessfully Updated User Information for email address ${email}`);
  }
  showError(errorMessage) {
    this.toastr.error(errorMessage);
  }
  
  userDetailForm = new FormGroup({
    first : new FormControl('',Validators.required),
    last : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    phone : new FormControl('',Validators.required),
    aboutMe : new FormControl('',Validators.required)
  });

  currentUser : IUser;

  ngOnInit() {

    const id = this.activeRoute.snapshot.paramMap.get('userId');
    console.log('richard',id)
    console.log(this.activeRoute.snapshot.paramMap)
    this.getUserDetails(+id);
  }

  getUserDetails(id:number) : void {
    this.userService.getById(id).subscribe(
      (user) => {
        console.log(user);
        this.currentUser = user;
        this.userDetailForm.patchValue(user);         
      },
      (error) => {
        console.log('failed getting User by Id')        
      },
    );  
  }

  save(): void {
    const userToSave = this.userDetailForm.value;
    console.log('userTosave' + this.userDetailForm)
    userToSave.id = this.currentUser.id
    console.log (userToSave)
    this.userService.saveUser(userToSave).subscribe(
      (response) => {
        console.log(response);
        console.log('Saved Todo');        
        this.showSuccess(response);   //everything went well 
        this.router.navigate(["admin/users-list/"]);
      },
      (error) => {
        console.log('failed saving toDo');
        this.showError('failed saving user' + error)
        this.router.navigate(["admin/users-list/"]);
      },
    );
  }



}
