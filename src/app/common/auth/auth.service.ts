import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/do';

export interface ILoginResponse {
    success: boolean;
    token?: string;
}
export interface ISignUp {
    firstName: string;
    lastName: string;
    emailAddress: string;
    password: string;
    userRoleId: number;
}

@Injectable()
export class AuthService {

    token: BehaviorSubject<string> = new BehaviorSubject<string>(null);

    constructor(
        private http: HttpClient,
    ) { }

    isAuthenticated(): boolean {
        return this.token ? true : false;
    }

    signup(firstName: string,
        lastName: string,
        emailAddress: string,
        password: string,
        userRoleId: number): Observable<ISignUp> {
        }

    login(email: string, password: string): Observable<ILoginResponse> {
        const data = {
            email: email,
            password: password,
        };
        return this.http.post<ILoginResponse>('http://localhost:3000/login', data)
            .do((response) => {
                this.token.next(response && response.success && response.token || null);
            });
    }

    logout(): void {
        this.token.next(null);
    }
}
