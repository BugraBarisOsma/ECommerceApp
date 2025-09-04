import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from './products';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Create } from './create/create';
import { List } from './list/list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    Products,
    Create,
    List
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Products
      }
    ]),
    MatSidenavModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
   
  ]
})
export class ProductsModule { }
