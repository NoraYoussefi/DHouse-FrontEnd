import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NavbarComponent} from './components/fixedComponents/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NouvelAnnoncesComponent } from './components/homepage/nouvel-annonces/nouvel-annonces.component';
import { StepsIllustrationsComponent } from './components/homepage/steps-illustrations/steps-illustrations.component';
import { CategoriesComponent } from './components/homepage/categories/categories.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductsCardComponent } from './components/products/products-card/products-card.component';
import { HeroComponent } from './components/homepage/hero/hero/hero.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { UploadPropComponent } from './components/user/upload-prop/upload-prop.component';
import { AnnoncesComponent } from './components/explore/annonces/annonces.component';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { PublicProfileComponent } from './components/user/public-profile/public-profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProductComponent } from './components/user/dashboard/product/product.component';
import { TransactionComponent } from './components/user/dashboard/transaction/transaction.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthInterceptor} from './helpers/auth.interceptor';
import { FaqComponent } from './components/faq/faq.component';

import {AngularFireModule} from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AboutusComponent } from './components/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NouvelAnnoncesComponent,
    StepsIllustrationsComponent,
    CategoriesComponent,
    HomepageComponent,
    ProductsCardComponent,
    HeroComponent,
    RegisterComponent,
    LoginComponent,
    UploadPropComponent,
    AnnoncesComponent,
    DashboardComponent,
    ProductDetailsComponent,
    PublicProfileComponent,
    AdminComponent,
    ProductComponent,
    TransactionComponent,
    FaqComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    AngularFireModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
