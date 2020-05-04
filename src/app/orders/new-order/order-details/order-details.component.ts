import {Component, Input, OnInit} from '@angular/core';
import {IOrder} from "../../../shared/interfaces";

@Component({
  selector: 'cm-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  @Input()
  public product: IOrder;

  constructor() { }

  ngOnInit(): void {
  }

}
