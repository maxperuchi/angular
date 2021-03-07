import { LOCALE_ID, NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/home/components/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BombasContainerComponent } from './components/home/components/bombas-container/bombas-container.component';
import { BombaItemComponent } from './components/home/components/bombas-container/components/bomba-item/bomba-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrecoCombustivelModalComponent } from './components/home/components/preco-combustivel-modal/preco-combustivel-modal.component';
import { AbrirCaixaModalComponent } from './components/home/components/abrir-caixa-modal/abrir-caixa-modal.component';
import { NovoCaixaModalComponent } from './components/home/components/novo-caixa-modal/novo-caixa-modal.component';
import { DetalhesContainerComponent } from './components/home/components/detalhes-container/detalhes-container.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ToastrModule } from 'ngx-toastr';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { RelatorioModalComponent } from './components/home/components/relatorio-modal/relatorio-modal.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    BombasContainerComponent,
    DetalhesContainerComponent,
    BombaItemComponent,
    PrecoCombustivelModalComponent,
    AbrirCaixaModalComponent,
    NovoCaixaModalComponent,
    RelatorioModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CurrencyMaskModule,
    ToastrModule.forRoot(),
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatTableModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }