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
  public itemsPerPage = 10;
  public pages: number[] = []; // Add this line
  public currentPage = 1;

  // Use ngOnInit to initialize data
  ngOnInit(): void {
    this.initializeSampleData();
    this.initializePagination();
    this.users = this.getUsersForPage(this.currentPage);
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
    const totalPages = Math.ceil(this.users.length / this.itemsPerPage);
    this.pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Method to get users for the current page
  public getUsersForPage(pageNumber: number): User[] {
    const startIndex = (pageNumber - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.users.slice(startIndex, endIndex);
  }

  public changePage(pageNumber: number): void {
    this.initializeSampleData();
    this.currentPage = pageNumber;
    this.users = this.getUsersForPage(this.currentPage);
  }
}
