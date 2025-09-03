import { Component } from '@angular/core';
import { Product } from '../../../../services/common/models/product';
import { CreateProduct } from '../../../../contracts/CreateProduct';
import { Alertify, MessageType, PositionType } from '../../../../services/admin/alertify';



@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.html',
  styleUrl: './create.scss'
})
export class Create {
constructor(private productService:Product,private alertify:Alertify){
  

}
// html'den aldigimiz degerleri CreateProduct obejesi olusturup , degerlerini atiyoruz.
// ardindan da createProduct methodunu cagiriyoruz.
createProduct(name:HTMLInputElement,stock:HTMLInputElement,price:HTMLInputElement){
  const createProduct:CreateProduct = new CreateProduct();
  createProduct.name = name.value;
  createProduct.stock = parseInt(stock.value);
  createProduct.price = parseFloat(price.value);

  this.productService.createProduct(createProduct, (errorMessage:any) => {
   this.alertify.message(errorMessage,{
    messageType: MessageType.Error,
    position: PositionType.TopRight,
    delay: 5
  })
  });
}

}
