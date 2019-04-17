import { Injectable } from '@angular/core';
import { IEvent } from "../IEvent";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EventService {

  constructor(private http: HttpClient) {}
    
  getAll(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>('http://localhost:3000/getAll');
  }
}
