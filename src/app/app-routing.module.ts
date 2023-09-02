import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ProductComponent } from './modules/product/product.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'productos', component: ProductComponent},
  {path: 'usuarios', component: ProductComponent},
  {path: 'carritos', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
