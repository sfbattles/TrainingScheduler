import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventService } from '../services/event.service';
import { IEvent } from '../IEvent';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.less']
})
export class EventsListComponent implements OnInit {
  
  searchEventForm = new FormGroup({
    query: new FormControl('')
  })
  constructor(private eventService: EventService, 
              private activeRoute: ActivatedRoute) { }
  eventsList: IEvent[];
  query = '';
  ngOnInit() {
    this.getAllEvents();
    this.searchEventForm.get('query').valueChanges.pipe(debounceTime(350)).subscribe(  //allows you to see the value change
      (value) => {
        console.log(value);
        this.query = value;
        this.getAllEvents();
       });
  }

  getAllEvents() {
    this.eventService.get(this.query).subscribe((theEventlist) =>  {
      console.log(theEventlist);
      console.log(this.query)
      this.eventsList = theEventlist;  
    })
  }



}
