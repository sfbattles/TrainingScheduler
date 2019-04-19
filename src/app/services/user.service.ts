import { Injectable } from '@angular/core';
import { IUser } from "../IUser";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {}
    
  getAll(text: string): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://localhost:3000/admin/users-list');
  }

  get(text:string): Observable<IUser[]> {
    return this.http.get<IUser[]>(`http://localhost:3000/admin/users-list?email=${text}`);
  }

  getById(id: number): Observable<IUser> {
    console.log('This is the id' + id)
    return this.http.get<IUser>(`http://localhost:3000/admin/user-detail/${id}`);
  }

  saveUser(user: IUser): Observable<IUser> {
    console.log("I am in the house")
    console.log(user.id)
    
    if (user.id) {
      console.log("this is the service" + user.id)
      return this.http.put<IUser>(`http://localhost:3000/admin/user-detail/${user.id}`, user);
    } 
  }
}