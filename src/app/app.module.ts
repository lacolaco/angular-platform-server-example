import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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
    AppShellModule.runtime(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
