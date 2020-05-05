import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderBoxComponent } from './order-box/order-box.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularMaterialModule} from "../../shared/angular-material/angular-material.module";
import {BrowserModule} from "@angular/platform-browser";
import { OrderDetailsComponent } from './order-details/order-details.component';
import {SharedModule} from "../../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [OrderBoxComponent, OrderDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class NewOrderModule { }
