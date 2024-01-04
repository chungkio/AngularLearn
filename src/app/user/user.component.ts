import { Component, OnInit } from '@angular/core';

interface User {
  username: string;
  password: string;
  email: string;
  role: string;
  dateCreate: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public users: User[] = [];
  public pages: number[] = [];

  // Use ngOnInit to initialize data
  ngOnInit(): void {
    this.initializeSampleData();
    this.initializePagination();
    console.log('Users:', this.users);
  }

  // Create a separate method to initialize sample data
  private initializeSampleData(): void {
    // Clear existing users
    this.users = [];

    // Create 25 sample users
    for (let i = 1; i <= 25; i++) {
      const user: User = {
        username: `user${i}`,
        password: `pass${i}`,
        email: `user${i}@gmail.com`,
        role: i % 2 === 0 ? 'user' : 'admin',
        dateCreate: `2024-01-${i < 10 ? '0' + i : i}`
      };

      this.users.push(user);
    }
  }

  private initializePagination(): void {
    // For demonstration purposes, let's assume 5 pages
    this.pages = Array.from({ length: 15 }, (_, i) => i + 1);
  }

}
