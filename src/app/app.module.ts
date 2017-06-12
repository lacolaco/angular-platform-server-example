import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppShellModule } from '@angular/app-shell';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ssr-example'}),
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppShellModule.runtime(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
