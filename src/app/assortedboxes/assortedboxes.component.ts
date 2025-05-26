import { Component } from '@angular/core';
import { shopnow } from '../models/shopnow';
import { assortedboxesService } from '../services/assortedboxes.service';
import { CartserviceService } from '../services/cartservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assortedboxes',
  templateUrl: './assortedboxes.component.html',
  styleUrls: ['./assortedboxes.component.css']
})
export class AssortedboxesComponent {
 details: shopnow[] = [];
  
  constructor(private service: assortedboxesService, private cartService:CartserviceService,private router:Router) {}
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
