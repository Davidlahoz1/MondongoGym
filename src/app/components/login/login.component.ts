import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

   email: string = '';
  password: string = '';
  loading: boolean = false;
  hover: boolean = false;

  constructor(private router: Router) {}

  onSubmit() {
    this.loading = true;
    
    // Simular autenticación
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1500);
  }
}
