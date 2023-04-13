import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { OneWayBindComponent } from './one-way-bind/one-way-bind.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    EventBindComponent,
    OneWayBindComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
