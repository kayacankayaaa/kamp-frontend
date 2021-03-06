import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NaviComponent } from './components/navi/navi.component';
import { RentalComponent } from './components/rental/rental.component';

//kendi yazdığımız modüller buraya eklenir
@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ColorComponent,
    BrandComponent,
    CustomerComponent,
    NaviComponent,
    RentalComponent
  ],
  //dışarıdan eklenen(import edilen) modüller buraya yazılır!
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
