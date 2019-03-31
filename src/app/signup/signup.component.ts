import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app.signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {
  title = 'Sign Up';
  firstName = '';
  lastName = '';
  emailAddress = '';
  password = '';

  constructor(private toastr: ToastrService) {}
     showSuccess(newUser) {
      const { firstName, lastName, emailAddress, password } = newUser;
      this.toastr.success(`Sucessfully Added Email Address ${emailAddress}`);
     }
     showError(errorMessage) {
       this.toastr.error(errorMessage);
     } 

  signup() : void  {
    const newUser = {
      firstName:  this.firstName,
      lastName:   this.lastName,
      emailAddress: this.emailAddress,
      password: this.password
    }
    const { firstName, lastName, emailAddress, password } = newUser;

    if (firstName && lastName && emailAddress && password) {   
      this.showSuccess(newUser);
       console.log(newUser);
    } else {
      this.showError('Please complete all field');
      console.log("Please complete all field");
    }
  }
}