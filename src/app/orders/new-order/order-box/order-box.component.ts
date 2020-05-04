import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/index";
import {map, startWith} from "rxjs/internal/operators";
import {DataService} from "../../../core/services/data.service";
import {IOrder} from "../../../shared/interfaces";
import {TrackByService} from "../../../core/services/trackby.service";

@Component({
  selector: 'cm-order-box',
  templateUrl: './order-box.component.html',
  styleUrls: ['./order-box.component.css']
})
export class OrderBoxComponent implements OnInit {
  public products: IOrder[];
  inputCtrl = new FormControl();
  filteredProducts: Observable<IOrder[]>;
  choosedProducts: IOrder[] = [];


  constructor(private dataService: DataService, public dialogRef: MatDialogRef<OrderBoxComponent>, public trackbyService: TrackByService,
              @Inject(MAT_DIALOG_DATA) public data) {
  }

  ngOnInit() {
    this.dataService.getProducts().subscribe((products: IOrder[]) => {
      this.products = products;
      this.filteredProducts = this.inputCtrl.valueChanges
        .pipe(
          startWith(''),
          map(product => product ? this._filterProducts(product) : this.products.slice())
        );
    });
  }

  private _filterProducts(value: string): IOrder[] {
    const filterValue = value.toLowerCase();

    return this.products.filter(product => product.productName.toLowerCase().indexOf(filterValue) === 0);
  }

  addAll(): void {
    if (this.choosedProducts && this.choosedProducts.length > 0) {
      this.dataService.addCustomerOrder(this.data.id, this.choosedProducts).subscribe((respond) => {
        const isAddedNewOrder = this.choosedProducts && this.choosedProducts.length > 0;
        this.dialogRef.close(isAddedNewOrder);
      });
    }
  }

  addNewOrder(productName): void {
    const product = this.products.find((product) => product.productName === productName);
    this.choosedProducts.push(product);
    this.inputCtrl.setValue('');
  }

  close() {
    this.dialogRef.close(false);
  }

}
