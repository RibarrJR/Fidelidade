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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers,{}),
    StoreDevtoolsModule.instrument({
			name: 'autoshop',
			maxAge: 25,
			logOnly: environment.production,
		}),
		EffectsModule.forRoot([GeneralEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
