import {Component, OnInit} from '@angular/core';
import {Product} from 'src/app/common/product';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Product[];  /* otherwise use "| undefined" or " = []" */
  currentCategoryId: number | undefined;


  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  // Method is invoked once we "subscribe"
  //   - inside method we assign result to Product[]
  listProducts() {
    // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id')  // id from app.module
    if (hasCategoryId) {
      // get the "id" param string and convert to number using "+"
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    } else {
      this.currentCategoryId = 4;
    }

    // get products for category id
    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data;
      }
    )
  }

}
