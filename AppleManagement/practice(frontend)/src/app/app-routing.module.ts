import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewitemsComponent } from './components/viewitems/viewitems.component';
import { ItemdetailsComponent } from './components/itemdetails/itemdetails.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ItemdetailsGuard } from './components/itemdetails.guard';
import { AdditemComponent } from './components/additem/additem.component';
import { UpdateitemComponent } from './components/updateitem/updateitem.component';

const routes: Routes = [
  
  {
    path : 'items',
    component : ViewitemsComponent

  },
  {
    path : 'welcome',
    component : WelcomeComponent

  },
  {
    path : 'itemdetails/:id',
    canActivate: [ItemdetailsGuard],
    component : ItemdetailsComponent

  },
  {
    path : 'additems',
    component : AdditemComponent

  },
  {
    path : 'updateitem/:id',
    component : UpdateitemComponent

  },
  {
    path : '',
    redirectTo : 'welcome',
    pathMatch : 'full'
  },
  {
    path : '**',
    redirectTo : 'welcome',
    pathMatch : 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
