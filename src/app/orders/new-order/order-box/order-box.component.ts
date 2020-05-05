import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/index';
import {map, startWith} from 'rxjs/internal/operators';
import {DataService} from '../../../core/services/data.service';
import {IOrder} from '../../../shared/interfaces';
import {TrackByService} from '../../../core/services/trackby.service';

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
              @Inject(MAT_DIALOG_DATA) public customer) {
  }

  /**
   * ngOnInit
   * Load products list from server.
   * Filtering autocomplete list by input value
   */
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

  /**
   * Filter products list by productName
   * @param {string} value
   * @returns {IOrder[]}
   * @private
   */
  private _filterProducts(value: string): IOrder[] {
    const filterValue = value.toLowerCase();

    return this.products.filter(product => product.productName.toLowerCase().indexOf(filterValue) === 0);
  }

  /**
   * Send request to server to update the new orders.
   */
  orderAllProducts(): void {
    if (this.choosedProducts && this.choosedProducts.length > 0) {
      this.dataService.addCustomerOrder(this.customer.id, this.choosedProducts).subscribe((respond) => {
        const isAddedNewOrder = this.choosedProducts && this.choosedProducts.length > 0;
        this.dialogRef.close(isAddedNewOrder);
      });
    }
  }

  /**
   * Choose Product from list
   * @param productName
   */
  chooseProduct(productName): void {
    const product = this.products.find((_product) => _product.productName === productName);
    this.choosedProducts.push(product);
    this.inputCtrl.setValue('');
  }

  /**
   * Canceling the new order.
   */
  close() {
    this.dialogRef.close(false);
  }
}
