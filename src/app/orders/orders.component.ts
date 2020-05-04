import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/services/data.service';
import { ICustomer, IPagedResults } from '../shared/interfaces';
import { TrackByService } from '../core/services/trackby.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {OrderBoxComponent} from "./new-order/order-box/order-box.component";

@Component({
    selector: 'cm-customers-orders',
    styleUrls: [ './orders.component.scss' ],
    templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {

    customers: ICustomer[];
    totalRecords = 0;
    pageSize = 5;
    currentPage = 1;

    constructor(private dataService: DataService, public trackbyService: TrackByService, public dialog: MatDialog) { }

    ngOnInit() {
        this.getCustomersPage(1);
    }

    pageChanged(page: number) {
        this.currentPage = page;
        this.getCustomersPage(page);
    }

    getCustomersPage(page: number) {
        this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe((response: IPagedResults<ICustomer[]>) => {
                this.totalRecords = response.totalRecords;
                this.customers = response.results;
            });
    }

  addNewOrder(customer: ICustomer){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = customer;
    dialogConfig.width = "300px";
    dialogConfig.height = "450px";
    const dialogRef = this.dialog.open(OrderBoxComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(isAddedNewOrder => {
      if (isAddedNewOrder){
        this.getCustomersPage(this.currentPage );
      }
    });
  }

}
