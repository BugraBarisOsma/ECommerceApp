import { Component, signal } from '@angular/core';
//jqueryi indirip angular.jsonda scripts kismina ekledikten sonra bu kodu yazip inip inmedigini kontrol edebilirsin ve her yerde kullanabilirsin
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ECommerceClient');
}
