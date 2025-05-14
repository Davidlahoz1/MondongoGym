import { Component, OnInit } from '@angular/core';
import { GimnasioService } from '../../service/gym.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

    clases: any[] = [];

  constructor(private gimnasioService: GimnasioService) {}

  ngOnInit() {
    this.gimnasioService.getClases().subscribe({
      next: data => {
        this.clases = data;
      },
      error: err => {
        console.error('Error al obtener clases', err);
      }
    });

}
}
