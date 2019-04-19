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

  constructor(private toastr: ToastrService,
    private eventService: EventService,
    private calendar: NgbCalendar) { }
  
  eventForm = new FormGroup({
    name : new FormControl('',Validators.required),
    location : new FormControl('',Validators.required),
    startingDateAndTime : new FormControl(''),
    endingDateAndTime : new FormControl(''),
    description : new FormControl(''),
  });
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
