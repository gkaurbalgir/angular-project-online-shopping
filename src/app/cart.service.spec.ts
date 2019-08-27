import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });

  it('should be able to add a new product', () => {
    const service: CartService = TestBed.get(CartService);
    const product = {
      "ProductId": "HT-1000",
      "Category": "Laptops",
      "MainCategory": "Computer Systems",
      "TaxTarifCode": "1",
      "SupplierName": "Very Best Screens",
      "WeightMeasure": 4.2,
      "WeightUnit": "KG",
      "Description": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
      "Name": "Notebook Basic 15",
      "DateOfSale": "2017-03-26",
      "ProductPicUrl": "test-resources/sap/ui/demokit/explored/img/HT-1000.jpg",
      "Status": "Available",
      "Quantity": 10,
      "UoM": "PC",
      "CurrencyCode": "EUR",
      "Price": 956,
      "Width": 30,
      "Depth": 18,
      "Height": 3,
      "DimUnit": "cm"
    }
    service.addToCart(product);
    expect(service.items.includes(product)).toBeTruthy();
  });

  it('should be able to remove a product', () => {
    const service: CartService = TestBed.get(CartService);
    const product = {
      "ProductId": "HT-1000",
      "Category": "Laptops",
      "MainCategory": "Computer Systems",
      "TaxTarifCode": "1",
      "SupplierName": "Very Best Screens",
      "WeightMeasure": 4.2,
      "WeightUnit": "KG",
      "Description": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
      "Name": "Notebook Basic 15",
      "DateOfSale": "2017-03-26",
      "ProductPicUrl": "test-resources/sap/ui/demokit/explored/img/HT-1000.jpg",
      "Status": "Available",
      "Quantity": 10,
      "UoM": "PC",
      "CurrencyCode": "EUR",
      "Price": 956,
      "Width": 30,
      "Depth": 18,
      "Height": 3,
      "DimUnit": "cm"
    }
    service.addToCart(product);
    service.removeFromCart(product);
    expect(service.items.includes(product)).toBeFalsy();
  });
});
