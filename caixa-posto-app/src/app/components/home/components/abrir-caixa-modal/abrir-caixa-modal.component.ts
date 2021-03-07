import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Moment } from 'moment';
import { Caixa } from 'src/app/models/caixa';
import { CaixaService } from 'src/app/services/caixa.service';

@Component({
  selector: 'app-abrir-caixa-modal',
  templateUrl: './abrir-caixa-modal.component.html',
  styleUrls: ['./abrir-caixa-modal.component.scss']
})
export class AbrirCaixaModalComponent {

  selectedRowIndex: number = 0;

  dataPesquisaCaixa: Moment;

  resultadosPesquisaCaixa: Caixa[];

  displayedColumns: string[] = ['id', 'turno', 'dia'];

  constructor(private caixaService: CaixaService, public dialog: MatDialog) {
    this.caixaService.caixasResult$.subscribe(cs => this.resultadosPesquisaCaixa = cs);
  }

  public pesquisar(): void {
    this.caixaService.search(this.dataPesquisaCaixa).subscribe();
  }

  public highlight(row): void {
    this.selectedRowIndex = row.id;
  }

  public abrir(): void {
    const caixa = this.resultadosPesquisaCaixa.find(c => c.id === this.selectedRowIndex);
    this.caixaService.caixaAberto$.next(caixa);
    this.dialog.closeAll();
  }
}
