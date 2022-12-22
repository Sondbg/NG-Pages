import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Company } from './interfaces/company';
import { AuthService } from './auth/auth.service';



const apiURL=environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient, private authService: AuthService) {}

createCompany(info:any):Observable<any>{
let payload=createPayload('createCustomer',info)

  
 return this.httpClient.post<any>(apiURL,payload);
  
}

getItems(email:string, password:string){
let payload=createPayload('checkCustomer',{email, password});


  return this.httpClient.post<any>(apiURL,payload)
}

checkCustomerById(info:any){
  let payload=createPayload('checkCustomerById',info);

return this.httpClient.post<any>(apiURL,payload);
}


getAllItems(id:string){
  let payload=createPayload('getMyItemPrices',id);
//catalog page load


  return this.httpClient.post<any>(apiURL,payload)
}

getItemBySku(company:string | null,sku:string){
  let payload=createPayload('getItemPrice',{company, sku});

  return this.httpClient.post<any>(apiURL,payload) 
}

createSO(products:any){
let company=JSON.parse(this.authService.userSession);
if(!company)return
let payload=createPayload('createSO',{company,products});

return this.httpClient.post<any>(apiURL,payload) 
}

getMySO(){
  let company=JSON.parse(this.authService.userSession);
if(!company)return
let payload=createPayload('getMySo',{company});

return this.httpClient.post<any>(apiURL,payload) 
}

}


function createPayload(method:string,data:any){

  return JSON.stringify({method:method,data: data})
  }


