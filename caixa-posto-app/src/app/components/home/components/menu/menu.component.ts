import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Caixa } from 'src/app/models/caixa';
import { CaixaService } from 'src/app/services/caixa.service';
import { AbrirCaixaModalComponent } from '../abrir-caixa-modal/abrir-caixa-modal.component';
import { NovoCaixaModalComponent } from '../novo-caixa-modal/novo-caixa-modal.component';
import { PrecoCombustivelModalComponent } from '../preco-combustivel-modal/preco-combustivel-modal.component';
import { RelatorioModalComponent } from '../relatorio-modal/relatorio-modal.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  caixa$: Caixa;

  constructor(
    public dialog: MatDialog,
    private caixaService: CaixaService,
    private toastr: ToastrService) {
    this.caixaService.caixaAberto$.subscribe(c => this.caixa$ = c);
  }

  public novoCaixa(): void {
    this.dialog.open(NovoCaixaModalComponent, {
      width: 'auto',
      height: 'auto'
    });
  }

  public abrirCaixa(): void {
    this.dialog.open(AbrirCaixaModalComponent, {
      width: 'auto',
      height: 'auto'
    });
  }

  public precosCombustiveis(): void {
    this.dialog.open(PrecoCombustivelModalComponent, {
      width: 'auto',
      height: 'auto'
    });
  }

  public salvarCaixa(): void {
    this.caixaService.save(this.caixa$).subscribe(res => {
      if (res && res.id > 0) {
        this.caixaService.caixaAberto$.next(res);
        this.toastr.success('Caixa salvo com sucesso.');
      } else {
        this.toastr.error('Erro ao salvar o caixa.');
      }
    });
  }

  public relatorioCaixa(): void {
    this.dialog.open(RelatorioModalComponent, {
      maxWidth: '95vw',
      width: '95vw',
      height: '630px'
    });
  }
}
