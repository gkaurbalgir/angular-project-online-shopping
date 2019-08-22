import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  removeFromCart(productToBeRemoved) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].ProductId === productToBeRemoved.ProductId) {
        this.items.splice(i, 1);
        i--;
      }
    }
    return this.items;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
