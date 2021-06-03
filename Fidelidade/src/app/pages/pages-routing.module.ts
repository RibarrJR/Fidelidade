import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvaliacaoPageComponent } from './avaliacao-page/avaliacao-page.component';
import { CadastroPageComponent } from './cadastro-page/cadastro-page.component';
import { CadastroService } from './cadastro-page/services/cadastro.service';
import { HomePageComponent } from './home-page/home-page.component';
import { SobrePageComponent } from './sobre-page/sobre-page.component';

const cadastroRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomePageComponent,
    children:[
      { path: 'sobre', component: SobrePageComponent },
      { path: 'avaliacao', component: AvaliacaoPageComponent },
    ]
  },
  { path: 'NovoUsuario', component: CadastroPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(cadastroRoutes)],
  exports: [RouterModule],
  providers: [CadastroService],
})
export class PagesRoutingModule {}
