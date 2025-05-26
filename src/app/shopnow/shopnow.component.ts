import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopnow',
  templateUrl: './shopnow.component.html',
  styleUrls: ['./shopnow.component.css']
})
export class ShopnowComponent {
  selectedCategory: string = 'all';  // Default value for category
 
  constructor(private router:Router){
  }
  onclick(){
    this.router.navigate(['/dark'])
  }
  onclick1(){
    this.router.navigate(['/milk'])
  }
  onclick2(){
    this.router.navigate(['/white'])
  }
  onclick3(){
    this.router.navigate(['/assorted'])
  }
}
