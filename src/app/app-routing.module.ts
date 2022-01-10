import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnoncesComponent } from './components/explore/annonces/annonces.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { UploadPropComponent } from './components/user/upload-prop/upload-prop.component';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { PublicProfileComponent } from './components/user/public-profile/public-profile.component';

const routes: Routes = [

  //paths
  {path:'home',component:HomepageComponent},
  {path:'uploadprop',component:UploadPropComponent},
  {path:'explore',component:AnnoncesComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'productdetails',component:ProductDetailsComponent},
  {path:'profile',component:PublicProfileComponent},

  {path:'',redirectTo:'home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
