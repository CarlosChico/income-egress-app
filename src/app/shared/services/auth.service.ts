import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  async createUser(name: string, email: string, password: string) {
    await this.sleep(1550);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  }

  async loginUser(email: string, password: string): Promise<boolean> {
    const userEmail = localStorage.getItem('email');
    const userPassword = localStorage.getItem('password');

    await this.sleep(1500);
    return new Promise((resolve, reject) => {
      resolve(userEmail === email && userPassword === password),
        reject('error');
    });
  }

  logout(): Promise<boolean> {
    this.sleep(1000);
    return new Promise((resolve) => {
      resolve(true);
    });
  }

  async sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
