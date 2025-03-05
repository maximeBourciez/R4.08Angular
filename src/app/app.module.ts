import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CdComponent } from './cd/cd.component';
import { ListCdComponent } from './list-cd/list-cd.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CdComponent, ListCdComponent, FooterComponent, HomeComponent], // Ajout de AppComponent ici
  imports: [
      BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent] // Bootstraper l'application
})
export class AppModule {}
