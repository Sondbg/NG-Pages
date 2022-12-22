import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LogoutComponent } from './auth/logout/logout/logout.component';
import { ProfileComponent } from './auth/profile/profile/profile.component';
import { ItemsModule } from './catalog/items.module';
import { CartComponent } from './cart/cart/cart.component';
import { HomeComponent } from './home/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    ProfileComponent,
    CartComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule, 
    CoreModule,
    SharedModule,
    FormsModule,
     AppRoutingModule,
    HttpClientModule,
   ItemsModule,
   BrowserAnimationsModule


  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
