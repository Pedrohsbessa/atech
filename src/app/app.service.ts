// app.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  saveUser(user: { name: string, email: string, phone: string }) {
    const id = Math.random().toString(36).substring(2);
    const userWithId = { ...user, id };
    if (typeof window !== 'undefined') {
      localStorage.setItem(id, JSON.stringify(userWithId));
    }
  }

  getUsers(): any[] {
    const users = [];
    if (typeof window !== 'undefined') {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key !== null) {
          const value = localStorage.getItem(key);
          if (value !== null) {
            users.push(JSON.parse(value));
          }
        }
      }
    }
    return users;
  }

  deleteUser(user: any) {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(user.id);
    }
  }
  updateUser(id: string, updatedUser: any) {
    if (typeof window !== 'undefined') {
      const userWithOriginalId = { ...updatedUser, id }; // Garante que o ID original seja mantido
      localStorage.setItem(id, JSON.stringify(userWithOriginalId));
    }
  }
}
