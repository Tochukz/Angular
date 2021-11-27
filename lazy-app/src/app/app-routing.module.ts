import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, PreloadingStrategy } from '@angular/router';

const routes: Routes = [
  { 
    path: 'customer', 
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) 
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, 
      {
        // preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
