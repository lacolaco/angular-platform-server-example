import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppShellModule } from '@angular/app-shell';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        ServerModule,
        AppModule,
        AppShellModule.prerender(),
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        //   { provide: NgModuleFactoryLoader, useClass: ServerRouterLoader }
    ]
})
export class AppServerModule { }
