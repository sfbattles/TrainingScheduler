import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EventService } from '../services/event.service';
import { IEvent } from "../IEvent";
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})

export class EventDetailComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};
  time = {hour: 13, minute: 30};
  meridian = true;

  constructor(private toastr: ToastrService,
    private eventService: EventService,
    private calendar: NgbCalendar,
    private activeRoute: ActivatedRoute) {}
  
  eventDetailForm = new FormGroup({
    name : new FormControl('',Validators.required),
    location : new FormControl('',Validators.required),
    startDate : new FormControl(''),
    startTime : new FormControl(''),    
    endDate : new FormControl(''),
    endTime : new FormControl(''),
    description : new FormControl(''),
  });

  toggleMeridian() {
    this.meridian = !this.meridian;
}

  event: IEvent;

  ngOnInit() {
 
    const id = this.activeRoute.snapshot.paramMap.get('eventId');
    this.getEventDetails(+id);
  }

  showError(errorMessage) {
    this.toastr.error(errorMessage);
  }
  save(): void {
    if (this.eventDetailForm.controls.name.invalid) {
      this.showError('Name Is Invalid')
    }
    console.log(this.eventDetailForm.controls.name.invalid);
  }

  getEventDetails(id: number) : void {
    console.log("great",id)
    this.eventService.getById(id).subscribe((event) => {
      this.event = event;
      console.log(event);
      this.eventDetailForm.patchValue(event);   
    },
    (error) => {
      console.log('failed getting User by Id');      
    },
    );
  }
}
