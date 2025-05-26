import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../services/cartservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any[] = [];

  constructor(private cartService: CartserviceService, private router: Router) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = [];
    alert('Cart cleared.');
  }

  proceedToPayment() {
    if (this.items.length > 0) {
      this.router.navigate(['/payment']); 
    } else {
      alert('Your cart is empty!');
    }
  }

}
