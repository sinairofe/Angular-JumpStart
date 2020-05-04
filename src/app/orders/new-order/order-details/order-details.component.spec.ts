import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsComponent } from './order-details.component';
import {By} from "@angular/platform-browser";

describe('OrderDetailsComponent', () => {
  let component: OrderDetailsComponent;
  let fixture: ComponentFixture<OrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsComponent);
    component = fixture.componentInstance;
    component.product = {'productName': 'Hat', 'itemCost': 3.99};
    fixture.detectChanges();
  });

  it('should display productName & itemCost', () => {
    const nameElement = fixture.debugElement.query(By.css('.name'));
    const costElement = fixture.debugElement.query(By.css('.cost'));

    expect(nameElement.nativeElement.textContent.trim()).toBe('Hat' );
    expect(costElement.nativeElement.textContent.trim()).toBe('$3.99');
  });
});
