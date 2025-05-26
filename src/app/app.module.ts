import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PopularchocolatesComponent } from './popularchocolates/popularchocolates.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ShopnowComponent } from './shopnow/shopnow.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { DarkComponent } from './dark/dark.component';
import { WhiteComponent } from './white/white.component';
import { MilkComponent } from './milk/milk.component';
import { AssortedboxesComponent } from './assortedboxes/assortedboxes.component';
import { AuthService } from './services/authservice.service';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { SignupComponent } from './signup/signup.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    HomeComponent,
    PopularchocolatesComponent,
    TestimonialsComponent,
    ShopnowComponent,
    AboutusComponent,
    ContactComponent,
    DarkComponent,
    WhiteComponent,
    MilkComponent,
    AssortedboxesComponent,
    CartComponent,
    PaymentComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
   
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
