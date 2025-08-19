import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from './admin/layout/layout-module';
import { HomeModule } from './ui/components/home/home-module';
import { BasketsModule } from './ui/components/baskets/baskets-module';
import { ProductsModule } from './admin/components/products/products-module';
import { Layout } from './admin/layout/layout';
import { Home } from './ui/components/home/home';
import { Baskets } from './ui/components/baskets/baskets';
import { Products } from './ui/components/products/products';


const routes: Routes = [
// burada admin modulunu yuklemek icin loadChildren kullaniyoruz. load children kullanmamizin sebebi zaten kendi modullerinde RouteModule.ForChild olarak 
// tanimlamamiz. artik bu childlari burada tanimlayabilir. Bu tanimlama aslinda suna bir ornektir.
// https://....com/admin/customers olarak arandiginda ve customersdan sonra her ne varsa (/customers/....) hepsini CustomersModule'de ara.
{path:'admin' , component:Layout, children:[
  {path:'customers' , loadChildren: () => import('./admin/components/customers/customers-module').then(m => m.CustomersModule) },
  {path:'' , loadChildren: () => import('./admin/components/dashboard/dashboard-module').then(m => m.DashboardModule) },
  {path:'orders' , loadChildren: () => import('./admin/components/orders/orders-module').then(m => m.OrdersModule) },
  {path:'products' , loadChildren: () => import('./admin/components/products/products-module').then(m => m.ProductsModule) }
]},
{path: "" , component:Home},
{path: 'basket' , loadChildren:()=>import('./ui/components/baskets/baskets-module').then(m=>m.BasketsModule)},
{path: 'products' , loadChildren:()=>import('./ui/components/products/products-module').then(m=>m.ProductsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
