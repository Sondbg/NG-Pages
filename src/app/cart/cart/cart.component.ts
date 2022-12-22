import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { ApiService } from 'src/app/api.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
products:any[]=[];
subtotal:number=0;
total:number=0;
VAT:number=0;
defaultQty:number=1;
errorData:any |null=null;
loader:boolean | null=null;

constructor(private cartService: CartServiceService, private apiService: ApiService){

 
}

ngOnInit(): void {
  this.products=this.cartService.loadCart();
  console.log(this.products)

this.updateTotals()
}

updateTotals(){
  this.products.forEach((c:any)=>{
    this.subtotal+=Number(c.price)
  });


  this.VAT=this.subtotal*0.2;
  this.total=this.VAT+this.subtotal
}

removeItem(item:any){
  this.cartService.removeFromCart(item);
  this.products=this.cartService.loadCart();
  this.ngOnInit()
}

changeQty(event:any,product:any){

let index=this.products.findIndex((c:any)=>c.sku==product.sku)
this.products[index].quantity=event.target.value
this.cartService.saveCart();
this.updateTotals()

}

submitMyOrder(){
  this.loader=true;
  this.apiService.createSO(this.cartService)?.subscribe({
    next:(value)=>{
  if(value.ok==true){
    this.cartService.clearCart();
    this.products=this.cartService.loadCart();
    this.loader=null;

  }
     
    },
    error:(err)=>{
      this.errorData=true;
      console.log(err)
    }
  })
}

}
