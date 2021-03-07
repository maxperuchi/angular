import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bomba } from 'src/app/models/bomba';
import { Leitura } from 'src/app/models/leitura';
import { CaixaService } from 'src/app/services/caixa.service';
import { CURRENCY_OPTIONS } from '../../../../../../app.component';

@Component({
  selector: 'app-bomba-item',
  templateUrl: './bomba-item.component.html',
  styleUrls: ['./bomba-item.component.scss']
})
export class BombaItemComponent {

  currencyOptions$ = CURRENCY_OPTIONS;

  private leitura$: Leitura;

  @Input()
  set leitura(value) {
    this.leitura$ = value;
    if (!this.bombaItemForm) {
      this.createForm();
    }
    this.bombaItemForm.patchValue(value);
  }

  get leitura(): Leitura {
    if (this.leitura$) {
      Object.assign(this.leitura$, this.bombaItemForm.value);
      return this.leitura$;
    }
    return null;
  }

  bombaItemForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private caixaService: CaixaService) { }

  createForm() {
    this.bombaItemForm = this.formBuilder.group({
      id: [0, Validators.nullValidator],
      data: [new Date(), Validators.nullValidator],
      caixa: [{}, Validators.nullValidator],
      bomba: [{}, Validators.nullValidator],
      term: [0, Validators.nullValidator],
      inic: [0, Validators.nullValidator],
      afericao: [0, Validators.nullValidator],
      litros: [0, Validators.nullValidator],
      valor: [0, Validators.nullValidator]
    });
    this.bombaItemForm.get('term').valueChanges.subscribe(() => this.calcularBomba());
    this.bombaItemForm.get('afericao').valueChanges.subscribe(() => this.calcularBomba());
  }

  get somenteLeitura(): boolean {
    return this.leitura$?.id > 0;
  }

  private calcularBomba(): void {
    if (!this.somenteLeitura) {
      const litros: number = (this.bombaItemForm.get('term').value || 0) - (this.bombaItemForm.get('inic').value || 0);
      const litrosSemAfericao: number = litros - (this.bombaItemForm.get('afericao').value || 0);

      const valor: number = litrosSemAfericao * this.leitura$.bomba.combustivel.valor;
      this.bombaItemForm.get('valor').setValue(valor);

      const litrosArredondado = Math.round(litrosSemAfericao * 10) / 10;
      this.bombaItemForm.get('litros').setValue(litrosArredondado);
    }

    setTimeout(() => {
      this.caixaService.calcularDetalhes.emit();
    }, 50);
  }
}
