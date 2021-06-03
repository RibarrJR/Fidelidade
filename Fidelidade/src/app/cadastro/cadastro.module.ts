import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router"
import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroPageComponent } from './cadastro-page/cadastro-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CadastroPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    CadastroRoutingModule,
  ]
})
export class CadastroModule { }
