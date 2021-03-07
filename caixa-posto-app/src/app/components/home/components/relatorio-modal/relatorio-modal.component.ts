import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CaixaService } from 'src/app/services/caixa.service';
import { Caixa } from 'src/app/models/caixa';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio-modal.component.html',
  styleUrls: ['./relatorio-modal.component.scss']
})
export class RelatorioModalComponent {

  @ViewChild('htmlData') htmlData: ElementRef;

  caixa$: Caixa;

  constructor(private caixaService: CaixaService) {
    this.caixaService.caixaAberto$.subscribe(c => this.caixa$ = c);
  }

  public openPDF(): void {
    let DATA = document.getElementById('htmlData');

    html2canvas(DATA).then(canvas => {

      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('l', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

      const dt = new Date(this.caixa$.dia);
      PDF.save(`${this.caixa$.turno}-${dt.getDate()}-${dt.getMonth()}-${dt.getFullYear()}.pdf`);
    });
  }
}
