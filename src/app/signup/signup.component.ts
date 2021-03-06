import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../common/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app.signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {
  firstName = '';
  lastName = '';
  emailAddress = '';
  password = '';
  phone = '';
  aboutMe = '';

  constructor(private toastr: ToastrService,
    private authService: AuthService,
    private router: Router) { }
    
  showSuccess(newUser) {
    const { emailAddress} = newUser;
    this.toastr.success(`Sucessfully Added Email Address ${emailAddress}`);
  }
  showError(errorMessage) {
    this.toastr.error(errorMessage);
  }

  signup(): void {
    const newUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      emailAddress: this.emailAddress,
      password: this.password,
      phone: this.phone,
      aboutMe: this.aboutMe
    }

    const { firstName, lastName, emailAddress, password, phone, aboutMe } = newUser;
    console.log(newUser);
    if (firstName && lastName && emailAddress && password) {

      this.authService.signup( firstName, lastName, emailAddress, password, phone, aboutMe ).subscribe((response) => {
          this.router.navigateByUrl('/login');
          this.showSuccess(newUser);   //everything went well            
        });
    } else {

      this.showError('Please complete all field');
    }
  }
}