import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Combustivel } from 'src/app/models/combustivel';
import { CombustivelService } from 'src/app/services/combustivel.service';
import { CURRENCY_OPTIONS_COMBUSTIVEL } from '../../../../app.component';

@Component({
  selector: 'app-preco-combustivel-modal',
  templateUrl: './preco-combustivel-modal.component.html',
  styleUrls: ['./preco-combustivel-modal.component.scss']
})

export class PrecoCombustivelModalComponent {

  currencyOptions$ = CURRENCY_OPTIONS_COMBUSTIVEL;

  combustiveis$: Combustivel[];

  constructor(private combustivelService: CombustivelService, public dialog: MatDialog) {
    this.combustivelService.getAll().subscribe(co => this.combustiveis$ = co);
  }

  public salvar(): void {
    this.combustivelService.save(this.combustiveis$).subscribe(() => this.dialog.closeAll());
  }

}
