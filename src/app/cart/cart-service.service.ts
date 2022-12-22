import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  personalCart:any[]=[];

  constructor(){}

saveCart(){
  localStorage.setItem('cart_item', JSON.stringify(this.personalCart))
}

getCart(){
  return this.personalCart
}

addProduct(product:any){
this.personalCart.push(product);
this.saveCart();
}

loadCart(){
return this.personalCart =JSON.parse(localStorage.getItem('cart_item') as any) || []
}

alreadyInCart(product:any){
  this.loadCart()

  return this.personalCart.findIndex((c:any)=> c.sku==product.sku)!=-1;
}

removeFromCart(product:any){
  const index=this.personalCart.findIndex((c:any)=> c.sku==product.sku);

  if(index!=-1){
    this.personalCart.splice(index,1);
    this.saveCart()
  }
}

clearCart(){
  localStorage.clear()
}


}
