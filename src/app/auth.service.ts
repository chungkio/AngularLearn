import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUser: { username: string, role: string } | null = null;

  login(username: string, password: string): boolean {
    // Replace this logic with your actual authentication logic
    const mockUsers = [
      { username: 'admin', password: 'admin123', role: 'admin' },
      { username: 'user', password: 'user123', role: 'user' }
    ];

    const user = mockUsers.find(u => u.username === username && u.password === password);

    if (user && user.role === 'admin') {
      this.loggedInUser = { username: user.username, role: user.role };
      return true;
    } else {
      return false;
    }
  }

  getLoggedInUser(): { username: string, role: string } | null {
    return this.loggedInUser;
  }
}
