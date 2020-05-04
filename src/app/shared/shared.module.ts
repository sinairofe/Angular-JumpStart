import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FilterTextboxModule } from './filter-textbox/filter-textbox.module';
import { PaginationModule } from './pagination/pagination.module';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { TrimPipe } from './pipes/trim.pipe';
import { SortByDirective } from './directives/sortby.directive';
import {AngularMaterialModule} from "./angular-material/angular-material.module";

@NgModule({
  imports: [CommonModule, FilterTextboxModule, PaginationModule, AngularMaterialModule ],
  exports: [ CommonModule, FormsModule, CapitalizePipe, TrimPipe, SortByDirective, FilterTextboxModule, PaginationModule, AngularMaterialModule ],
  declarations: [ CapitalizePipe, TrimPipe, SortByDirective ]
})
export class SharedModule { }
