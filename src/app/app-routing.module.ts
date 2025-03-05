import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ListCdComponent} from './list-cd/list-cd.component';
import {CdComponent} from './cd/cd.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: ListCdComponent},
  { path: 'cd/:id', component: CdComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
