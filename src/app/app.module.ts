import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FlipClockComponent } from './flip-clock/flip-clock.component';
import { AppRoutingModule } from './app-routing.module';
import { GithubLinkComponent } from './github-link/github-link.component';

@NgModule({
  declarations: [
    AppComponent,
    FlipClockComponent,
    GithubLinkComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
