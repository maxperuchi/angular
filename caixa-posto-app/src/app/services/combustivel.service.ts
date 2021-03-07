import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Combustivel } from '../models/combustivel';

@Injectable({
  providedIn: 'root'
})
export class CombustivelService {

  constructor(private httpClient: HttpClient) { }

  combustiveis$ = new BehaviorSubject<Combustivel[]>([]);

  public save(combustiveis: Combustivel[]): Observable<Combustivel[]> {
    return this.httpClient.post<Combustivel[]>('http://localhost:5000/combustivel', combustiveis).pipe(tap(co => this.combustiveis$.next(co)));
  }

  public getAll(): Observable<Combustivel[]> {
    return this.httpClient.get<Combustivel[]>('http://localhost:5000/combustivel/todos').pipe(tap(co => this.combustiveis$.next(co)));
  }
}
