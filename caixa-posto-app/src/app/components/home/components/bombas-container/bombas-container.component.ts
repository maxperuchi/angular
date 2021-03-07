import { Component } from '@angular/core';
import { Caixa } from 'src/app/models/caixa';
import { CaixaService } from 'src/app/services/caixa.service';

@Component({
  selector: 'app-bombas-container',
  templateUrl: './bombas-container.component.html',
  styleUrls: ['./bombas-container.component.scss']
})
export class BombasContainerComponent {

  caixa$: Caixa;

  constructor(private caixaService: CaixaService) {
    this.caixaService.caixaAberto$.subscribe(c => this.caixa$ = c);
  }
}
