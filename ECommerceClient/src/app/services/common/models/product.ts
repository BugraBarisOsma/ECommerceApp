import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client-service';
import { firstValueFrom, Observable } from 'rxjs';
import { CreateProduct } from '../../../contracts/CreateProduct';
import { HttpErrorResponse } from '@angular/common/http';
import { ListProduct } from '../../../contracts/ListProduct';

@Injectable({
  providedIn: 'root'
})

// verilerin post get gibi aksiyonlari servisler uzerinden gercekletirilir. 
export class Product {

  constructor(private httpClientService:HttpClientService){
  }

  // createProduct(product:CreateProduct, errorCallBack?:any ){
  //    this.httpClientService.post({
  //     controller:"products"
  //   },product).subscribe(result =>{
  //     alert("complete");
  //   }, (errorResponse:HttpErrorResponse)=>{
  //    const _error :Array<{key:string,value:Array<string>}> = errorResponse.error;
  //    let message = "";
  //    console.log(errorResponse)
  //    _error.forEach((v,index)=>{
  //     v.value.forEach((_v,_index)=>{
  //       message + `${_v}<br>`
  //     });
  //    });
  //       errorCallBack(message);
  //   });
  // }
  createProduct(product: CreateProduct, errorCallBack?: (message: string) => void) {
    this.httpClientService.post({
      controller: "products"
    }, product).subscribe({
      next: result => {
        alert("complete");
      },
      error: (errorResponse: HttpErrorResponse) => {
        let message = "";
  
        const errors = errorResponse.error?.errors;
  
        if (errors && typeof errors === "object") {
          for (const key in errors) {
            if (Array.isArray(errors[key])) {
              errors[key].forEach((errMsg: string) => {
                message += `${errMsg}<br>`;
              });
            }
          }
        } else if (typeof errorResponse.error === "string") {
          message = errorResponse.error;
        } else {
          message = "Beklenmeyen bir hata oluştu.";
        }
  
        if (errorCallBack) errorCallBack(message);
      }
    });
  }
  
  async listProduct(): Promise<ListProduct[]> {
    try {
      const data = await firstValueFrom(
        this.httpClientService.get<ListProduct[]>({
          controller: "products",
          action:"All"
        })
      );
      return data;
    } catch (error) {
      console.error("An error has been occured while listing products:", error);
      throw error;
    }
}
}
