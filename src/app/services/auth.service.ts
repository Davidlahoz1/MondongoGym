import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: any[] = [];

  register(user: any): boolean {
    const exists = this.users.find(u => u.email === user.email);
    if (exists) {
      return false; // Ya existe
    }
    this.users.push(user);
    return true;
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    return !!user;
  }
}
