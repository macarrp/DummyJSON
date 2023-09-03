import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/model/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  cargado = false;

  products: Array<Product> = [];
  totalProductsAPI: number = 0;

  limit = 12;
  skip = 0;

  constructor(
      private readonly productService: ProductService
    ) 
    { }

  ngOnInit(): void {
    this.cargarPagina(0);
  }

  cargarPagina(page: number) {
    this.skip = page * this.limit;
    this.getAllProductsLimit(this.limit, this.skip);
  }
  
  async getAllProductsLimit(limit = 0, skip = 0) {
    this.productService.getAllPaginated(limit, skip).subscribe({
      next: response => {
        this.products = response.products;
        this.totalProductsAPI = response.total;
      },
      error: error => {
        console.error(`Ha habido un error al recuperar el listado de productos: ${error}`)
      },
      complete: () => { 
        this.cargado = true;
      }
    })
  }

  searchProduct(valor: string) {
    this.productService.searchProduct(valor).subscribe({
      next: response => {
        this.products = response.products;
        this.totalProductsAPI = response.total;
      },
      error: error => {
        console.error(`Ha habido un error al buscar por: ${valor}\nError: ${error}`)
      }
    })
  }

  getDescription(product: Product): string {
    const trimFrom = 80;
    return product.description.length < trimFrom ? product.description : product.description.slice(0, trimFrom) + '...';
  }

  getNumberOfStars(product: Product): number {
    return Math.round(product.rating)
  }

  // getStarRating(product: Product) {
  //   const numberOfStars = this.getNumberOfStars(product);
  //   const htmlElements = [];

  //   for(let i = 0; i < 5; i++) {
  //     htmlElements.push({
        
  //     })
  //   }
  // }

  getDiscountedPrice(product: Product): number {
    return product.price * (1 - (product.discountPercentage / 100));
  }

  openModal(product: Product) {
    alert('Modal no implementado todavóa 😢')
  }
}
