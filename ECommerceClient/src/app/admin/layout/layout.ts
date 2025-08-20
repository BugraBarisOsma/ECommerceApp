import { Component } from '@angular/core';
import { Alertify, MessageType, PositionType } from '../../services/admin/alertify';



@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

constructor(private alertify : Alertify){

}
  ngOnInit(): void {
     this.alertify.message("Merhaba" ,{
      messageType:MessageType.Success,
      position : PositionType.BottomLeft,
      delay:3
     })
  }
  
}

