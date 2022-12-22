import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { CartServiceService } from 'src/app/cart/cart-service.service';
import { ItemDetail } from 'src/app/interfaces/itemDetails';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{

  item:ItemDetail | null=null;
user:string | null=null;
errorData=false;
alreadyInCart:boolean | null=null;
loader:boolean | null=true;


constructor(private cartService: CartServiceService,private apiService:ApiService,private authService:AuthService,private router: Router,private activeRouter:ActivatedRoute){

}

ngOnInit(): void {
  this.activeRouter.params.subscribe(params => {
    const id = params['id'];
    console.log(id)
   this.user=this.authService.userSession;

    this.apiService.getItemBySku(this.user,id).subscribe({
      next:(value)=>{
      
        this.item=value.item
        this.alreadyInCart=this.cartService.alreadyInCart(value.item);
this.loader=null;
      },
      error:(err)=>{
        this.errorData=true;
        console.log(err)
      }
    })
}); 



}

addToCart(product:any,form: NgForm){
  if(form.invalid)return
  console.log(form)
 if(!this.cartService.alreadyInCart(product)){
product.quantity=form.value.quantity;
this.cartService.addProduct(product);
this.alreadyInCart=true;

 }
}


}
