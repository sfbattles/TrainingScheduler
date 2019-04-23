import { Injectable } from '@angular/core';
import { IEvent } from "../IEvent";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EventService {

  constructor(private http: HttpClient) {}
    
  getAll(text: string): Observable<IEvent[]> {
    return this.http.get<IEvent[]>('http://localhost:3000/events-list/');
  }

  get(text:string): Observable<IEvent[]> {
    console.log('Richard',text);
    return this.http.get<IEvent[]>(`http://localhost:3000/events-list?location=${text}`);
  }

  getById(id: number): Observable<IEvent> {
    console.log('event id ->' + id)
    return this.http.get<IEvent>(`http://localhost:3000/event-detail/${id}`);
  }
}
