import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Moment } from 'moment';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Caixa } from '../models/caixa';

@Injectable({
  providedIn: 'root'
})
export class CaixaService {

  public calcularDetalhes = new EventEmitter<void>();

  public caixasResult$ = new BehaviorSubject<Caixa[]>([]);

  public caixaAberto$ = new BehaviorSubject<Caixa>(null);

  constructor(private httpClient: HttpClient) { }

  public save(caixa: Caixa): Observable<Caixa> {
    return this.httpClient.post<Caixa>('http://localhost:5000/caixa', caixa);
  }

  public new(turno: string): Observable<Caixa> {
    return this.httpClient.get<Caixa>(`http://localhost:5000/caixa/novo/${turno}`).pipe(tap(c => this.caixaAberto$.next(c)));
  }

  public search(data: Moment): Observable<Caixa[]> {
    return this.httpClient.get<Caixa[]>(`http://localhost:5000/caixa/data/${data.year()}-${data.month() + 1}-${data.day()}`)
      .pipe(tap(cs => this.caixasResult$.next(cs)));
  }
}
