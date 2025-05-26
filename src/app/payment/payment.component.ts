import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  
  
    paymentDetails = {
      cardNumber: '',
      expiry: '',
      cvv: ''
    };
  
    constructor(private router: Router) {}
  
    onPaymentSuccess(): void {
      
      this.router.navigate(['/order-confirmation']);
    }
    }
  
  

