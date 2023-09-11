import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CorouselComponent } from './corousel/corousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { FooterComponent } from './footer/footer.component';
  
// Importing forms module
import { FormsModule, ReactiveFormsModule  } 
from '@angular/forms';

   

import { NgbModule }
from '@ng-bootstrap/ng-bootstrap';
import { MyAccountDropdownComponent } from './my-account-dropdown/my-account-dropdown.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    CorouselComponent,
    ProductGridComponent,
    FooterComponent,
    MyAccountDropdownComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
