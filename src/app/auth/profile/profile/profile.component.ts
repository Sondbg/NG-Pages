import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
orders:any[]=[];

  constructor(private apiService:ApiService, private authService:AuthService){

  }

 companyInfo={
name:'',
phone:'',
vat:'',
id:'',
email:'',
address:''
 };

  ngOnInit(): void {
  var id=sessionStorage.getItem('userAQT');
var company=id? JSON.parse(id):{};
console.log(this.orders)

  this.apiService.checkCustomerById(company).subscribe((value)=>{
    console.log(value)
    if(value.ok==true){
      this.companyInfo.name=value.info.name;
      this.companyInfo.id=value.info.id;
      this.companyInfo.phone=value.info.phone;
      this.companyInfo.vat=value.info.vat;
      this.companyInfo.email=value.info.email;
      this.companyInfo.address=value.info.address;
    }
  
  });
 
this.apiService.getMySO()?.subscribe((value)=>{
  this.orders=value.order;
  console.log(this.orders)
})

  }

}
