import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout } from './layout';
import { ComponentsModule } from './components/components-module';





@NgModule({
  declarations: [
    Layout,
    
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  // layout modulunu disaridan erisilebilir hale getirdik. Yoksa app-module gibi baska yerlerde kullanilamaz
  // Ayni sekilde admin modulde'de layout modulunu export etmemiz gerekli
  exports: [
    Layout
  ]
})
export class LayoutModule { }
