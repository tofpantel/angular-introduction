import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { OneWayBindComponent } from './one-way-bind/one-way-bind.component';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    EventBindComponent,
    OneWayBindComponent,
    TwoWayBindComponent,
    TemplateVariablesComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
