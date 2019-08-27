import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products.component';
import { ShippingAddressComponent } from '../shipping-address/shipping-address.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent, ShippingAddressComponent],
      imports: [ReactiveFormsModule, HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set `isShowCart` as false on calling `checkout()`', () => {
    component.checkout();
    expect(component.isShowCart).toBeFalsy();
  });

  it('should set `showShippingAddressSection` as true on calling `checkout()`', () => {
    component.checkout();
    expect(component.showShippingAddressSection).toBeTruthy();
  });

  it('should call `addToCart` service on calling `addToCart()`', () => {
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
    };
    spyOn(component.cartService, 'addToCart');
    component.addToCart(product, null);
    expect(component.cartService.addToCart).toHaveBeenCalled();
  });

  it('should set `isShowCart` as false on calling `removeFromCart()`', () => {
    component.continueShopping([]);
    expect(component.isShowCart).toBeFalsy();
  });

  it('shoud set `showShippingAddressSection` as false on calling `continueShopping()`, ', () => {
    component.continueShopping([]);
    expect(component.showShippingAddressSection).toBeFalsy();
  });

  it('should call `removeFromCart` service on calling `removeFromCart()`', () => {
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
    };
    spyOn(component.cartService, 'removeFromCart');
    component.removeFromCart(product);
    expect(component.cartService.removeFromCart).toHaveBeenCalled();
  });

  it('should call `calculateCost` on calling `removeFromCart()`', () => {
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
    };
    spyOn(component, 'calculateCost');
    component.removeFromCart(product);
    expect(component.calculateCost).toHaveBeenCalled();
  });

  it('should set `isShowCart` as true on calling `showCart()`', () => {
    component.showCart();
    expect(component.isShowCart).toBeTruthy();
  });

  it('should set `orderInfo.isOrderPlaced` as false on calling `showCart()`', () => {
    component.showCart();
    expect(component.orderInfo.isOrderPlaced).toBeFalsy();
  });

  it('should call `cartService.getItems` on calling `showCart()`', () => {
    spyOn(component.cartService, 'getItems');
    component.showCart();
    expect(component.cartService.getItems).toHaveBeenCalled();
  });

  it('should set `isShowCart` as false on calling `orderInfoCallback` and isOrderPlaced is true', () => {
    const event = { "cartProducts": [{ "ProductId": "HT-1000", "Category": "Laptops", "MainCategory": "Computer Systems", "TaxTarifCode": "1", "SupplierName": "Very Best Screens", "WeightMeasure": 4.2, "WeightUnit": "KG", "Description": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro", "Name": "Notebook Basic 15", "DateOfSale": "2017-03-26", "ProductPicUrl": "test-resources/sap/ui/demokit/explored/img/HT-1000.jpg", "Status": "Available", "Quantity": 10, "UoM": "PC", "CurrencyCode": "EUR", "Price": 956, "Width": 30, "Depth": 18, "Height": 3, "DimUnit": "cm" }, { "ProductId": "HT-1000", "Category": "Laptops", "MainCategory": "Computer Systems", "TaxTarifCode": "1", "SupplierName": "Very Best Screens", "WeightMeasure": 4.2, "WeightUnit": "KG", "Description": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro", "Name": "Notebook Basic 15", "DateOfSale": "2017-03-26", "ProductPicUrl": "test-resources/sap/ui/demokit/explored/img/HT-1000.jpg", "Status": "Available", "Quantity": 10, "UoM": "PC", "CurrencyCode": "EUR", "Price": 956, "Width": 30, "Depth": 18, "Height": 3, "DimUnit": "cm" }], "shippingAddress": { "firstName": "a", "lastName": "b", "address": { "street": "c", "city": "d", "state": "e", "zip": "f" } }, "isOrderPlaced": true };
    component.orderInfoCallback(event);
    expect(component.isShowCart).toBeFalsy();
  });

  it('should set `showShippingAddressSection` as false on calling `orderInfoCallback` and isOrderPlaced true', () => {
    const info = { "cartProducts": [{ "ProductId": "HT-1000", "Category": "Laptops", "MainCategory": "Computer Systems", "TaxTarifCode": "1", "SupplierName": "Very Best Screens", "WeightMeasure": 4.2, "WeightUnit": "KG", "Description": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro", "Name": "Notebook Basic 15", "DateOfSale": "2017-03-26", "ProductPicUrl": "test-resources/sap/ui/demokit/explored/img/HT-1000.jpg", "Status": "Available", "Quantity": 10, "UoM": "PC", "CurrencyCode": "EUR", "Price": 956, "Width": 30, "Depth": 18, "Height": 3, "DimUnit": "cm" }, { "ProductId": "HT-1000", "Category": "Laptops", "MainCategory": "Computer Systems", "TaxTarifCode": "1", "SupplierName": "Very Best Screens", "WeightMeasure": 4.2, "WeightUnit": "KG", "Description": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro", "Name": "Notebook Basic 15", "DateOfSale": "2017-03-26", "ProductPicUrl": "test-resources/sap/ui/demokit/explored/img/HT-1000.jpg", "Status": "Available", "Quantity": 10, "UoM": "PC", "CurrencyCode": "EUR", "Price": 956, "Width": 30, "Depth": 18, "Height": 3, "DimUnit": "cm" }], "shippingAddress": { "firstName": "a", "lastName": "b", "address": { "street": "c", "city": "d", "state": "e", "zip": "f" } }, "isOrderPlaced": true };
    component.orderInfoCallback(info);
    expect(component.showShippingAddressSection).toBeFalsy();
  });

  it('should call `cartService.clearCart` on calling `orderInfoCallback`', () => {
    const info = { "cartProducts": [{ "ProductId": "HT-1000", "Category": "Laptops", "MainCategory": "Computer Systems", "TaxTarifCode": "1", "SupplierName": "Very Best Screens", "WeightMeasure": 4.2, "WeightUnit": "KG", "Description": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro", "Name": "Notebook Basic 15", "DateOfSale": "2017-03-26", "ProductPicUrl": "test-resources/sap/ui/demokit/explored/img/HT-1000.jpg", "Status": "Available", "Quantity": 10, "UoM": "PC", "CurrencyCode": "EUR", "Price": 956, "Width": 30, "Depth": 18, "Height": 3, "DimUnit": "cm" }, { "ProductId": "HT-1000", "Category": "Laptops", "MainCategory": "Computer Systems", "TaxTarifCode": "1", "SupplierName": "Very Best Screens", "WeightMeasure": 4.2, "WeightUnit": "KG", "Description": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro", "Name": "Notebook Basic 15", "DateOfSale": "2017-03-26", "ProductPicUrl": "test-resources/sap/ui/demokit/explored/img/HT-1000.jpg", "Status": "Available", "Quantity": 10, "UoM": "PC", "CurrencyCode": "EUR", "Price": 956, "Width": 30, "Depth": 18, "Height": 3, "DimUnit": "cm" }], "shippingAddress": { "firstName": "a", "lastName": "b", "address": { "street": "c", "city": "d", "state": "e", "zip": "f" } }, "isOrderPlaced": true };
    spyOn(component.cartService, 'clearCart');
    component.orderInfoCallback(info);
    expect(component.cartService.clearCart).toHaveBeenCalled();
  });

  it('should set totalCost as 15 on calling `calculateCost` and when there are no cartProducts', () => {
    component.cartProducts = [];
    component.calculateCost();
    expect(component.totalCost).toBe(15);
  });

  it('should set total cost as 15+products.cost on calling `calculateCost` and 1 cartProduct ', () => {
    component.cartProducts = [{
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
    }];
    component.calculateCost();
    expect(component.totalCost).toBe(971);
  });


  afterEach(() => {
    component.isShowCart = false;
    component.showShippingAddressSection = false;
    component.cartProducts = [];
  });

});
