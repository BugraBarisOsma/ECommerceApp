import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ListProduct } from '../../../../contracts/ListProduct';
import { Product } from '../../../../services/common/models/product';
import { Alertify, AlertifyOptions, MessageType, PositionType } from '../../../../services/admin/alertify';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List implements OnInit{
constructor(private productService : Product,private alertifyService:Alertify){}

displayedColumns: string[] = ['id', 'name', 'stock', 'price','createdDate','updatedDate','deletedDate'];
dataSource  : MatTableDataSource<ListProduct> = new MatTableDataSource<ListProduct>();

@ViewChild(MatPaginator) paginator: MatPaginator;

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
}

async ngOnInit() {
  try {
    const products = await this.productService.listProduct();
    this.dataSource.data = products;
  } catch (error) {
    this.alertifyService.message(error,
      {messageType:MessageType.Error,
        delay:5,
        position:PositionType.TopRight
      })
  }

}
}