import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  URL_API: string = environment.API_URL;

  constructor(private readonly http: HttpClient) { }

  checkApiStatus(): Observable<ApiStatus> {
    return this.http.get<ApiStatus>(`${this.URL_API}test`);
  }
}

export interface ApiStatus {
  status: string
  method: string
}