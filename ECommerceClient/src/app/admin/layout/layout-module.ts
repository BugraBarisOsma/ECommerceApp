import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Layout } from './layout';
import { ComponentsModule } from './components/components-module';
import {MatSidenavModule} from '@angular/material/sidenav';




@NgModule({
  declarations: [
    Layout,
    
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    MatSidenavModule,

  ],
  // layout modulunu disaridan erisilebilir hale getirdik. Yoksa app-module gibi baska yerlerde kullanilamaz
  // Ayni sekilde admin modulde'de layout modulunu export etmemiz gerekli
  exports: [
    Layout
  ]
})
export class LayoutModule { }
