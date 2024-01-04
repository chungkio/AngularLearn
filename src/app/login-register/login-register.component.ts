import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss'],
})
export class LoginRegisterComponent {
  protected username: string = '';
  protected password: string = '';

  // Inject Router and AuthService in the constructor
  constructor(private router: Router, private authService: AuthService) {}

  public login(): void {
    if (this.authService.login(this.username, this.password)) {
      console.log('Login successful');
      this.redirectToUserListing();
    } else {
      console.log('Login failed');
    }
  }

  private redirectToUserListing(): void {
    console.log('Login redirect /user/listing');
    this.router.navigateByUrl('/user/listing');
  }
}