import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './overview/overview.component';
import { SpecComponent } from './spec/spec.component';
import { RouterModule } from '@angular/router';
import { PRODUCT_ROUTES } from './product.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PRODUCT_ROUTES)
  ],
  declarations: [ ProductComponent, OverviewComponent, SpecComponent],
  exports :     [ ProductComponent]
})
export class ProductModule { }
