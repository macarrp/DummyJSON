import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseObject, ResponseProduct } from '../model/response.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL_API: string = environment.API_URL;

  constructor(private readonly http: HttpClient) { }

  getAllPaginated(limit: number, skip: number): Observable<ResponseProduct> { 
    return this.http.get<ResponseProduct>(`${this.URL_API}products?limit=${limit}&skip=${skip}`)
  }

  searchProduct(text: string): Observable<ResponseProduct> {
    return this.http.get<ResponseProduct>(`${this.URL_API}products/search?q=${text}`)
  }
}
