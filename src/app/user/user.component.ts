import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: any[] = [];

  ngOnInit(): void {
    // Tạo danh sách 5 data mẫu
    this.users = [
      { username: 'admin', password: 'admin123', role: 'admin', dateCreate: '2024-01-03' },
      { username: 'user2', password: 'pass2', role: 'user', dateCreate: '2024-01-04' },
      { username: 'user3', password: 'pass3', role: 'editor', dateCreate: '2024-01-05' },
      { username: 'user4', password: 'pass4', role: 'user', dateCreate: '2024-01-06' },
      { username: 'user5', password: 'pass5', role: 'admin', dateCreate: '2024-01-07' }
    ];
  }

  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Thực hiện kiểm tra đăng nhập ở đây
    if (this.isValidUser()) {
      // Nếu đăng nhập thành công
      console.log('Login redirect /user/listing');
      this.router.navigate(['/user/listing']);
      console.log('Login successful');
    } else {
      // Xử lý khi đăng nhập không thành công
      console.log('Login failed');
    }
  }

  private isValidUser(): boolean {
    // Truy vấn username password
    const user = this.users.find(u => u.username === this.username && u.password === this.password);

    // kiểm tra quyền của user
    return user && user.role === 'admin';
  }
}