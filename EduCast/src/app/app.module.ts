import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUSComponent } from './Home/about-us/about-us.component';
import { GettingStartedComponent } from './Home/getting-started/getting-started.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Home/login/login.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { ComplaintComponent } from './Home/complaint/complaint.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUSComponent,
    GettingStartedComponent,
    LoginComponent,
    HomeComponent,
    ComplaintComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'getstart', component: GettingStartedComponent },
      { path: 'about', component: AboutUSComponent },
      { path: 'complaints', component: ComplaintComponent },
      { path: 'login', component: LoginComponent },
      // { path: 'products/:id',
      //   canActivate:[ProductDetailsGuard],
      //   component: ProductDetailComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }//404 not found page route
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
