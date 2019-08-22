import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service'

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let products = {};
      this.productsService.getProducts().subscribe((data: {}) =>  {
        products = data;
        this.product = this.getKnownProducts(products, params.get('productId'));
      });
      
    });
  }

  getKnownProducts(products, id) {
    return products.filter((product) => product['ProductId'] === id ? product : null )[0];
  }


}
