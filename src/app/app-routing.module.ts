import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from './auth/guards/auth.activate';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout/logout.component';
import { ProfileComponent } from './auth/profile/profile/profile.component';
import { PageNotFoundComponent } from './core/pageNotFound/page-not-found/page-not-found.component';
import { CatalogComponent } from './catalog/catalog/catalog.component';
import { AboutUsComponent } from './static/about-us/about-us.component';
import { ItemComponent } from './catalog/item/item/item.component';
import { CartComponent } from './cart/cart/cart.component';
import { HomeComponent } from './home/home/home.component';




const routes: Routes = [{
  path:'',
  pathMatch:'full',
  component:HomeComponent,
  canActivate: [AuthActivate],
  redirectTo:'',
  data:{ title:'Aquatec',

}
},
{
  path:'auth/login',
  component:LoginComponent,
  canActivate: [AuthActivate],
  data:{title: 'Login',
  logoutGuard:true

}
},
{
  path:'auth/profile',
  component: ProfileComponent,
  canActivate: [AuthActivate],
  data:{title: 'My profile',
  loginGuard:true
}
},
{
  path:'auth/logout',
  component: LogoutComponent,
  canActivate: [AuthActivate],
  data:{title: 'My profile',
  loginGuard:true
}
},
{
  path:'cart',
  component: CartComponent,
  canActivate: [AuthActivate],
  data:{title: 'My cart',
  loginGuard:true
}
},
{
  path:'catalog',
  component: CatalogComponent,
  data:{title: 'Catalog Page',
}
},
{
  path:'about-us',
  component: AboutUsComponent,
  data:{title: 'Catalog Page',
}
},
{
  path:'catalog',
  children:[{
path:'detail/:id',
component:ItemComponent
 } ],
  canActivate: [AuthActivate],
  data:{title:'Item',
 
 }
 },
{
 path:'**',
 component:PageNotFoundComponent,
 canActivate: [AuthActivate],
 data:{title:'Error 404',

}
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
