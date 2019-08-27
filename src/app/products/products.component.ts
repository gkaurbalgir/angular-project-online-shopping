import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any;
  isShowCart: boolean;
  cartProducts: any;
  totalCost: number;
  orderInfo: any;
  showShippingAddressSection: boolean;
  cartService: CartService;

  constructor(private productService: ProductsService) { } 

  ngOnInit() {
    this.productService.getProducts().subscribe((data: {}) =>  {
      this.products = data;
    });
    this.orderInfo = {};
    this.orderInfo.isOrderPlaced = false;
    this.cartService = new CartService();
  }

  addToCart(product, event) {
    this.cartService.addToCart(product);
    // event.target.disabled = true;
  }

  showCart() {
    this.isShowCart = true;
    this.orderInfo.isOrderPlaced = false;
    this.cartProducts = this.cartService.getItems();
    this.calculateCost();
    console.log(this.cartProducts);
  }

  removeFromCart(product) {
    this.cartProducts = this.cartService.removeFromCart(product);
    console.log(this.cartProducts);
    this.calculateCost();
  }

  continueShopping(cartProducts) {
    this.cartProducts = cartProducts;
    this.isShowCart = false;
    this.showShippingAddressSection = false;
  }

  checkout() {
    this.isShowCart = false;
    this.showShippingAddressSection = true;
  }

  calculateCost() {
    this.totalCost = 15;
    if(this.cartProducts && this.cartProducts.length > 0) {
      for (let i = 0; i < this.cartProducts.length; i++) {
        this.totalCost += this.cartProducts[i].Price;
      }
    }  
  }

  orderInfoCallback(orderInfo) {
    this.orderInfo = orderInfo;
    if(this.orderInfo.isOrderPlaced) {
      this.isShowCart = false;
      this.showShippingAddressSection = false;
      this.cartService.clearCart();
    }
  }
}
