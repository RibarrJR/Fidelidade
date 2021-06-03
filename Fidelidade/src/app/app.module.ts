import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralEffects } from './state/general/general.effects';
import { reducers } from './state/initial';
import { LoadingComponent } from './components/loading/loading.component';;
import { HomePageComponent } from './components/home-page/home-page.component';
import { ToastComponent } from './components/toast/toast.component';
import { ToastEffects } from './state/toast/toast.effects';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    ToastComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({
      name: 'autoshop',
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([GeneralEffects,ToastEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
