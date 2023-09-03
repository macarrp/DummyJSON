import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ProductComponent } from './modules/product/product.component';
import { AboutComponent } from './modules/about/about.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, title: 'Akafon | Tienda online'},
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'productos', component: ProductComponent, title: 'Akafon | Productos'},
  {path: 'usuarios', component: ProductComponent, title: 'Akafon | Usuarios'},
  {path: 'carritos', component: ProductComponent},
  {path: 'sobre-el-proyecto', component: AboutComponent, title: 'Akafon | Sobre el proyecto'},

  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }