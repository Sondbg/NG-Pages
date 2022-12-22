import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

get isLoggedIn(){
if(sessionStorage.getItem('userAQT')){ return true}
return false
}

get userSession(){
  let id=sessionStorage.getItem('userAQT');
 return id? JSON.parse(id):false;
}

  constructor() { }
}
