import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from "@angular/material/input";
import {MatRippleModule} from "@angular/material/core";



@NgModule({
  declarations: [],
  imports: [
    MatDialogModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatButtonModule,
    MatRippleModule,
  ],
  exports: [
    MatDialogModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatButtonModule,
    MatRippleModule
  ]
})
export class AngularMaterialModule { }
