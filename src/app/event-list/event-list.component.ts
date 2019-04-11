import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private toastr: ToastrService) { }
  
  eventForm = new FormGroup({
    name : new FormControl('',Validators.required),
    location : new FormControl('',Validators.required),
    startingDateAndTime : new FormControl(''),
    endingDateAndTime : new FormControl(''),
    description : new FormControl(''),
  });

  ngOnInit() {
  }
  showError(errorMessage) {
    this.toastr.error(errorMessage);
  }
  save(): void {
    if (this.eventForm.controls.name.invalid) {
      this.showError('Name Is Invalid')
    }
    console.log(this.eventForm.controls.name.invalid);
  }
}
