import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {OrderBoxComponent} from './order-box.component';
import {DataService} from "../../../core/services/data.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {MockDataService} from "../../../shared/mocks";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TrackByService} from "../../../core/services/trackby.service";
import {By} from "@angular/platform-browser";
import {SharedModule} from "../../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('OrderBoxComponent', () => {
  let component: OrderBoxComponent;
  let fixture: ComponentFixture<OrderBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrderBoxComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, SharedModule, ReactiveFormsModule, CommonModule, BrowserAnimationsModule],
      providers: [TrackByService, {provide: DataService, useClass: MockDataService},
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MatDialogRef, useValue: {}}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('check loading products', async () => {
    fixture.whenStable().then(async () => {
      expect(component.products.length).toEqual(3);
    });
  });

  it('check autocomplete selecting value', async () => {
    fixture.whenStable().then(async () => {
      const matAutoCompleteOptions = document.querySelectorAll('mat-option');
      const optionToClick = matAutoCompleteOptions[1] as HTMLElement;
      optionToClick.click();

      const inputElement = fixture.debugElement.query(By.css('input'));
      expect(inputElement.nativeElement.value).toEqual('Shoes');
    });
  });
});
