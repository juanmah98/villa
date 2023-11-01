import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosApiService {
  private apiEndpoint = 'https://addmvoweucwjcwvpxhmu.supabase.co/rest/v1/usuarios';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    const headers = new HttpHeaders()
      .set('apikey', environment.supabaseKey)
      .set('Authorization', `Bearer ${environment.supabaseKey}`);

    return this.http.get(this.apiEndpoint + '?select=*', { headers });
  }
}
