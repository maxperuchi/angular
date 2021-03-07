import { Component, ViewChild } from '@angular/core';
import { Caixa } from 'src/app/models/caixa';
import { CaixaService } from 'src/app/services/caixa.service';
import { CURRENCY_OPTIONS } from '../../../../app.component';

@Component({
  selector: 'app-detalhes-container',
  templateUrl: './detalhes-container.component.html',
  styleUrls: ['./detalhes-container.component.scss']
})
export class DetalhesContainerComponent {

  @ViewChild('picker')
  picker;

  currencyOptions$ = CURRENCY_OPTIONS;

  caixa$: Caixa;

  constructor(private caixaService: CaixaService) {
    this.caixaService.calcularDetalhes.subscribe(() => this.calcularDetalhes());
    this.caixaService.caixaAberto$.subscribe(c => this.caixa$ = c);
  }

  public openCalendar() {
    if (!this.somenteLeitura) {
      this.picker.open();
    }
  }

  public calcularDetalhes(): void {
    if (!this.somenteLeitura) {
      this.calcSomaLeituras();
      this.calcSomaTotalA();
      this.calcSomaTotalB();
      this.calcDiferenca();
    }
  }

  get somenteLeitura(): boolean {
    return this.caixa$?.id > 0;
  }

  private calcSomaLeituras(): void {
    this.caixa$.somaLeituras = this.caixa$.leituras.map(l => l.valor).reduce((a, b) => a + b, 0);
  }

  private calcSomaTotalA(): void {
    let soma: number = this.caixa$.somaLeituras;
    soma += this.caixa$.trocoInicial;
    soma += this.caixa$.moedasInicial;
    soma += this.caixa$.vendaProdutos;
    soma += this.caixa$.recebimentos;
    soma += this.caixa$.arla;
    soma += this.caixa$.vales;
    this.caixa$.somaTotalA = soma;
  }

  private calcSomaTotalB(): void {
    let soma: number = this.caixa$.trocoFinal;
    soma += this.caixa$.moedasFinal;
    soma += this.caixa$.totalFiado;
    soma += this.caixa$.cartoesPix;
    soma += this.caixa$.dinheiro;
    soma += this.caixa$.retiradaCaixa;
    this.caixa$.somaTotalB = soma;
  }

  private calcDiferenca(): void {
    this.caixa$.diferenca = this.caixa$.somaTotalB - this.caixa$.somaTotalA;
  }
}
