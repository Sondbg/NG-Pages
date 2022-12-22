import { Component, KeyValueDiffers, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Company } from 'src/app/interfaces';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loader:boolean | null = null;

  constructor(private apiService:ApiService, private authService:AuthService, private router:Router, private activatedRoute: ActivatedRoute){

    
  }

  ngOnInit(){
  }

  
showLogin=true;
errors='';
  swapForms(event:any){
    event.preventDefault();

this.showLogin=!this.showLogin;
  }

  registerCompany(form: NgForm){
    console.log(form.invalid)
if(form.invalid){return}

let companyInfo:Company={
  company: form.value.company,
  email:form.value.email,
  phone:form.value.phone,
  password:form.value.password,
  address:form.value.address,
  vatReg:form.value.vatReg
};
this.loader=true;
this.apiService.createCompany(companyInfo).subscribe((value)=>{
  // value=JSON.parse(value)
console.log(value);
  if(value.ok===true){
    sessionStorage.setItem('userAQT',JSON.stringify(value.internalID));
    return window.location.reload()
  }else{
    this.loader=null;
  }
  return value
})
  }

  loginSubmit(form: NgForm){
    if(form.invalid){return}
    console.log(form.value)
    this.loader=true;
    this.apiService.getItems(form.value.email,form.value.password).subscribe((value)=>{
      console.log(value)
    if(value.status===200){
      sessionStorage.setItem('userAQT',JSON.stringify(value.internalID));
 return window.location.reload()
    }else if(value.status===204){
this.errors='Wrong email or password!'
    }else{
      this.errors='Internal server error'

    }
    this.loader=null;
    })
      }
}
