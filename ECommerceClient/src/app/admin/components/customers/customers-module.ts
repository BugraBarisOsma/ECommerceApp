import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customers } from './customers';
import { RouteConfigLoadEnd, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Customers
  ],
  // buradaki path su anlama gelmektedir. https://....com/admin/customers/(path'de yazan her ne ise)  arandiginda CustomersComponent acilacaktir
  // mesela burada path x olsun https://....com/admin/customers/x arandiginda CustomersComponent acilacaktir.
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Customers
      }
    ])
  ]
})
export class CustomersModule { }
