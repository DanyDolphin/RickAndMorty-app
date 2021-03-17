import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { API_BASE } from '../constants';
import { PageResponse } from '../responses';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: HttpClient
  ) { }

  getPage(page: string | undefined): Observable<PageResponse> {
    console.log(page || `${API_BASE}/character`)
    return this.http.get<PageResponse>(page || `${API_BASE}/character`).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocurrio un error:', error.error.message);
    } else {
      console.error(
        `Error del servidor (${error.status}): ${error.error}`);
    }
    return throwError(error.error.message || error.error);
  }
}
