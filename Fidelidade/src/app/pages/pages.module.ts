import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AvaliacaoPageComponent } from "./avaliacao-page/avaliacao-page.component";
import { CadastroPageComponent } from "./cadastro-page/cadastro-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { SobrePageComponent } from "./sobre-page/sobre-page.component";


@NgModule({
  declarations: [
    CadastroPageComponent,
    HomePageComponent,
    SobrePageComponent,
    AvaliacaoPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    PagesRoutingModule,
  ]
})

export class PagesModule { }
