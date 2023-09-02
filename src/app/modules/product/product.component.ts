import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/model/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Array<Product> = [];

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
    console.log(this.products)
  }

  async getAllProducts() {
    this.productService.getAllPaginated().subscribe({
      next: response => {
        this.products = response.products;
        console.log(response.products)
      },
      error: error => {
        console.log(`Ha habido un error al recuperar el listado de productos: ${error}`)
      }
    })
  }

}
