import { Injectable } from '@angular/core';
import { IUser } from "../IUser";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {}
    
  getAll(): Observable<IUser> {
    return this.http.get<IUser>('http://localhost:3000/getAll');
  }
}