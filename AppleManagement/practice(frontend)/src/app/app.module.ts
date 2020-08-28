import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewitemsComponent } from './components/viewitems/viewitems.component';
import { ConvertToSpacesPipe } from './components/viewitems/convert-to-spaces.pipe';
import { StarComponent } from './components/star/star.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ItemdetailsComponent } from './components/itemdetails/itemdetails.component';
import { AdditemComponent } from './components/additem/additem.component';
import { UpdateitemComponent } from './components/updateitem/updateitem.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewitemsComponent,
    ConvertToSpacesPipe,
    StarComponent,
    WelcomeComponent,
    ItemdetailsComponent,
    AdditemComponent,
    UpdateitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
