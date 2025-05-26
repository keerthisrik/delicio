import { Component } from '@angular/core';
import { WhiteService } from '../services/white.service';
import { shopnow } from '../models/shopnow';
import { CartserviceService } from '../services/cartservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-white',
  templateUrl: './white.component.html',
  styleUrls: ['./white.component.css']
})
export class WhiteComponent {
details: shopnow[] = [];
  
  constructor(private service: WhiteService, private cartService:CartserviceService,private router:Router ) {}
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
