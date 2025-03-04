import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CdComponent } from './cd/cd.component';
import { ListCdComponent } from './list-cd/list-cd.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CdComponent, ListCdComponent], // Ajout de AppComponent ici
  imports: [BrowserModule],
  bootstrap: [AppComponent] // Bootstraper l'application
})
export class AppModule {}
