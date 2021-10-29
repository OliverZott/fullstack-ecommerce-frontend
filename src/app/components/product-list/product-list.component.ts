import {Component, OnInit} from '@angular/core';
import {Product} from 'src/app/common/product';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-list',
  // templateUrl: './product-list.component.html',
  // templateUrl: './product-list-table.component.html',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Product[];  /* otherwise use "| undefined" or " = []" */

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.listProducts();
  }

  // Method is invoked once we "subscribe"
  //   - inside method we assign result to Product[]
  listProducts() {
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    )
  }

}
