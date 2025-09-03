import { Injectable } from '@angular/core';
declare var alertify : any;

// Services nedir ?
// Angular’da service (servis) dediğimiz yapı, uygulamanın iş mantığını (business logic) 
// bileşenlerden (component) ayırmak için kullanılan sınıflardır.

// Servisler genellikle:
//  -Veri paylaşımı (state management)
//  -PI istekleri (HTTP ile backend’e bağlanma)
//  -Ortak fonksiyonların taşınması (utility / helper metodlar)
//  -Uygulama genelinde kullanılacak mantıkların merkezi bir noktada toplanması için kullanılır.

// burada bir helper olarak kullanilacagini varsayabiliriz.
// alertify icerisinde pek cok fonksiyon var ancak bu fonksiyonlari elle yazdgimizda kullanabiliyoruz
// yani ide herhangi bir oneri yapmiyor. bundan dolayi durmadan dokumana bakmamiz gerekiyor
// bundan dolayi bu helper classini olusturduk 

// serviceler yapi olacak farkli moduller icin ayri ayri (burada admin ve ui) veya ortak olarak kullanilabilir. 


@Injectable({
  providedIn: 'root'
})
export class Alertify {
  constructor(){}

  //message(message : string, messageType : MessageType,position:PositionType,delay:number = 3)
  // burada partial yaparak istedgimiz yer sadece { } kullanarak degerleri verebiliriz
  message(message:string, options:Partial<AlertifyOptions>)
  {
    alertify.set('notifier','delay',options.delay)
    alertify.set('notifier','position',options.position)
    alertify[options.messageType](message);
  }

  dissmiss(){
    alertify.dismissAll();
  }
}
export class AlertifyOptions{
  // burada normalde hata alinabilir tsconfig.json'dan stricti false yapabilirsin
  messageType : MessageType = MessageType.Success;
  position:PositionType = PositionType.BottomRight;
  delay:number = 3;
}

export enum MessageType{
  Error = "error",
  Message = "message",
  Notify = "notify",
  Warning = "warning",
  Success = "success"
}

export enum PositionType{
BottomCenter = "bottom-center",
BottomRight = "bottom-right",
BottomLeft = "bottom-left",
TopCenter = "top-center",
TopRight = "top-right",
TopLeft = "top-left",


}
