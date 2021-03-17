import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { API_BASE } from './constants';
import { Character } from './models';
import { PageResponse } from './responses';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private cache = {}

  constructor(
    private http: HttpClient
  ) { }

  getPage(page: string | undefined): Observable<PageResponse> {
    console.log(page || `${API_BASE}/character`)
    return this.http.get<PageResponse>(page || `${API_BASE}/character`).pipe(
      map(res => {
        for (const character of res.results)
          this.cache[character.id] = character
        return res
      }),
      catchError(this.handleError)
    )
  }

  getCharacter(id: number): Observable<Character> {
    if (this.cache[id])
      return of(this.cache[id])
    else
      return this.http.get<Character>(`${API_BASE}/character/${id}`).pipe(
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
