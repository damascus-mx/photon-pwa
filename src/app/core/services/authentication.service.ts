import { Injectable } from '@angular/core';
import { CREDENTIAL } from '@photon/config/app.config';
import { User } from '../models/user.model';
import { convertToObject } from '../helpers/jwt.helper';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  signIn(user: string, password: string): any {}

  signUp(user: User): any {}

  getSession(): User {
    return convertToObject(localStorage.getItem(CREDENTIAL));
  }

  removeSession(): void {
    localStorage.removeItem(CREDENTIAL);
  }

  public getToken(): string {
    return localStorage.getItem(CREDENTIAL);
  }

}
