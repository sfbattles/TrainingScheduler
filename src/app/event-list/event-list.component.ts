import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EventService } from '../services/event.service';
import { IEvent } from "../IEvent";
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})

export class EventListComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};
  time = {hour: 13, minute: 30};
  meridian = true;

  constructor(private toastr: ToastrService,
    private eventService: EventService,
    private calendar: NgbCalendar) {}
  
  eventForm = new FormGroup({
    name : new FormControl('',Validators.required),
    location : new FormControl('',Validators.required),
    startingDate : new FormControl(''),
    startingTime : new FormControl(''),    
    endingDate : new FormControl(''),
    endingTime : new FormControl(''),
    description : new FormControl(''),
  });

  toggleMeridian() {
    this.meridian = !this.meridian;
}

  selectToday() {
    this.model = this.calendar.getToday();
  }

  eventList: IEvent[];

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
  getAllEvents() {
    this.eventService.getAll().subscribe((eventList) => {
      this.eventList = eventList;
      console.log(eventList);
    });
  }
}
