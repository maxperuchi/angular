import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CaixaService } from 'src/app/services/caixa.service';

@Component({
  selector: 'app-novo-caixa-modal',
  templateUrl: './novo-caixa-modal.component.html',
  styleUrls: ['./novo-caixa-modal.component.scss']
})
export class NovoCaixaModalComponent {

  turnoCaixaNovo: string = '';

  constructor(private caixaService: CaixaService, public dialog: MatDialog) { }

  public novo(): void {
    this.caixaService.new(this.turnoCaixaNovo.trim()).subscribe();
    this.dialog.closeAll();
  }

  public isValid(): boolean {
    return (this.turnoCaixaNovo && this.turnoCaixaNovo.trim().length > 0);
  }
}
