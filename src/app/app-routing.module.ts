import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopnowComponent } from './shopnow/shopnow.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { DarkComponent } from './dark/dark.component';
import { MilkComponent } from './milk/milk.component';
import { WhiteComponent } from './white/white.component';
import { AssortedboxesComponent } from './assortedboxes/assortedboxes.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  
    { path: '', component: HomeComponent },         
    { path: 'shop-now', component: ShopnowComponent }, 
    { path: 'about-us', component: AboutusComponent }, 
    { path: 'contactUs', component: ContactComponent } ,
    { path: 'dark', component: DarkComponent } ,
    {path:'milk',component: MilkComponent},
    {path:'white',component: WhiteComponent},
    {path:'assorted',component: AssortedboxesComponent},
    {path:'signup',component: SignupComponent},
    { path: 'cart', component: CartComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
