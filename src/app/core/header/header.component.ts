import { Component } from '@angular/core';
import { interval, map } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[ApiService]
})


export class HeaderComponent {
  
  get isLoggedIn() {
    return this.authService.isLoggedIn
  }
// cookieUser= sessionStorage.getItem('userAQT');
$time=interval(1000).pipe(
  map(()=>new Date())
)
constructor(private authService:AuthService){}




}
