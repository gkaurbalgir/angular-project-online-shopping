import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.scss']
})
export class ShippingAddressComponent implements OnInit {
  @Input() cartProducts: any;
  @Output() valueChange = new EventEmitter();
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required], 
    }),
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }


  onSubmit() {
    const cartProducts = { cartProducts: this.cartProducts };
    const shippingAddress = { shippingAddress: this.profileForm.value };
    const orderPlaced = { isOrderPlaced : true };
    const request = { ...cartProducts, ...shippingAddress, ...orderPlaced };
    console.log('Order placed', request);
    this.valueChange.emit(request);
  }

}
