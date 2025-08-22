import { CUSTOM_ELEMENTS_SCHEMA, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from "ngx-spinner";
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AdminModule } from './admin/admin-module';
import { UiModule } from './ui/ui-module';
import { provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    UiModule,
    

  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    {provide:"baseUrl",useValue:"https://localhost:7272/api",multi:true},
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
