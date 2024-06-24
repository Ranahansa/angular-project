import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private apiURL = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiURL).pipe(
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/${id}`)
    .pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    throw error;
  }
}