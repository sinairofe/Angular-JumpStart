import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';
import {NewOrderModule} from "./new-order/new-order.module";

@NgModule({
  imports: [SharedModule, OrdersRoutingModule, NewOrderModule],
  declarations: [OrdersRoutingModule.components]
})
export class OrdersModule { }
