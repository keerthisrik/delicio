import { Component, OnInit } from '@angular/core';
import { ShopnowService } from '../services/shopnow.service';
import { shopnow } from '../models/shopnow';
import { CartserviceService } from '../services/cartservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dark',
  templateUrl: './dark.component.html',
  styleUrls: ['./dark.component.css']
})
export class DarkComponent implements OnInit {
  details: shopnow[] = [];

  constructor(private service: ShopnowService, private cartService: CartserviceService, private router: Router) {}

  ngOnInit(): void {
    this.name();
  }

  name() {
    this.service.getall().subscribe(data=>(this.details=data));
  
    }
  
  addToCart(product: any) {
    this.cartService.addItem(product);
    this.router.navigate(['/cart']); // Navigate to cart page
  }
}
