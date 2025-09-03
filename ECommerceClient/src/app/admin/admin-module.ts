import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout-module';
import { ComponentsModule } from './components/components-module';




// Oncelikle burada layout modulunu import ediyoruz.
@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentsModule
  ],
  exports: [
    LayoutModule
  ]
})
export class AdminModule { }
