import { Component } from '@angular/core';
import { HttpClientService } from '../../../services/common/http-client-service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {
constructor(private httpClientService:HttpClientService){


}
ngOnInit():void{
this.httpClientService.get({
  controller:"products",
  action:"all"
}).subscribe(data => console.log(data))
// this.httpClientService.post({
//   controller:"products"
//   },{
//     name:"pencil",
//   stock:100,
//   price:14
//   }).subscribe()
//   this.httpClientService.post({
//     controller:"products"
//     },{
//       name:"paper",
//     stock:200,
//     price:8
//     }).subscribe()
//     this.httpClientService.post({
//       controller:"products"
//       },{
//         name:"ink",
//       stock:300,
//       price:19
//       }).subscribe()



        // this.httpClientService.put({
        //   controller:"products"
        // },{
        //   id:"0198d130-c11d-7add-9ebd-6cad77aa56ff",
        //   name:"bobonif",
        //   stock:"1000",
        //   price:"1000"
        // }).subscribe()


// this.httpClientService.delete({
//   controller:"products"
// },"0198d130-c11d-7e72-b251-e793164cfeaf"
// ).subscribe() 


// this.httpClientService.get({
//   fullEndPoint:"https://jsonplaceholder.typicode.com/posts"
// }).subscribe(data => console.log(data))

}
}
