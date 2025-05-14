import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GimnasioService {
  private apiUrl = 'https://192.168.40.232:8000/api/gym'; 

  constructor(private http: HttpClient) { }

  // 🚀 Obtener lista de clases
  getClases(): Observable<any> {
    return this.http.get(`${this.apiUrl}/clases`);
  }

  // 📝 Registro de usuario
  registrarUsuario(usuario: {
    nombre: string,
    email: string,
    contraseña: string
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/signup`, usuario);
  }

  // 🔐 Login de usuario
  loginUsuario(credentials: {
    email: string,
    contraseña: string
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials);
  }
}
