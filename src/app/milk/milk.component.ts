import { Component } from '@angular/core';
import {MilkService} from '../services/milk.service';
import { shopnow } from '../models/shopnow';
import { CartserviceService } from '../services/cartservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-milk',
  templateUrl: './milk.component.html',
  styleUrls: ['./milk.component.css']
})
export class MilkComponent {
details: shopnow[] = [];
  
  constructor(private service: MilkService,  private cartService: CartserviceService,
    private router: Router) {}
  ngOnInit(): void {
    this.name();
  }
  name() {
    this.service.getall().subscribe(data => (this.details = data));
  }
addToCart(product: any) {
  this.cartService.addItem(product);
  this.router.navigate(['/cart']); // Navigate to cart page
}
}
