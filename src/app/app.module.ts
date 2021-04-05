import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ButtonModule} from './button/button.module';
import { SpinnerComponent } from './spinner/spinner.component';
import {SpinnerModule} from './spinner/spinner.module';
import {SpinnerButtonModule} from './button/spinner-button/spinner-button.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    SpinnerModule,
    SpinnerButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
