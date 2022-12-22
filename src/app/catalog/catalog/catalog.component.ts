import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit{

  constructor( private apiService:ApiService,private authService:AuthService,private router: Router,private activatedRoute: ActivatedRoute){
    this.activatedRoute.paramMap.subscribe(params => {
      this.ngOnInit();
  });
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn
  }
loader:boolean | null=true;
 itemsList: Array<any>=[];
errorData=false;
filterPump=false;
filterFilter=false;

ngOnInit(){
  var id=sessionStorage.getItem('userAQT');
  var company=id? JSON.parse(id):{};

  this.activatedRoute.params.subscribe(params => {
    const id = params['pumps'];
    console.log('Url Id: ',id);
});
  this.apiService.getAllItems(company).subscribe({
    next:(value)=>{
      this.loader=null;
      this.itemsList=value.itemsArr
    },
    error:(err)=>{
      this.errorData=true;
      console.log(err)
    }
  })

  console.log(this.itemsList)
}


filterPumps(){
this.filterPump=!this.filterPump;
this.filterFilter=!this.filterPump
if(this.filterPump){
  this.router.navigate(['/catalog'],{
    queryParams:{
      pumps:true
    }
  })
}else{
  this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this.router.navigate(['/catalog']);
});
}
}

filterFilters(){
  this.filterFilter=!this.filterFilter;
  this.filterPump=!this.filterFilter;
  if(this.filterFilter){
  this.router.navigate([this.router.url],{
    queryParams:{
      filters:true
    }
  })
}else{
  this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this.router.navigate(['/catalog']);
});
}
}



}
