import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './modules/product/product.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './core/shared/spinner/spinner.component';
import { SpinnerInterceptor } from './core/shared/interceptors/spinner.interceptor';
import { FooterComponent } from './core/shared/footer/footer.component';
import { NavbarComponent } from './core/shared/navbar/navbar.component';
import { PaginationComponent } from './core/shared/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    ProductComponent,
    FooterComponent,
    NavbarComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
