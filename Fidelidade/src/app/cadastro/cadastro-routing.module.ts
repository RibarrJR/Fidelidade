import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPageComponent } from './cadastro-page/cadastro-page.component';
import { CadastroService } from './cadastro.service';

const cadastroRoutes: Routes = [
  { path: 'NovoUsuario', component: CadastroPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(cadastroRoutes)],
  exports: [RouterModule],
  providers: [CadastroService],
})
export class CadastroRoutingModule {}
