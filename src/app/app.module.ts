import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductEditComponent } from "./page/product-edit/product-edit.component";
import { HomePageComponent } from "./page/home-page/home-page.component";
import { ProductAddComponent } from "./page/product-add/product-add.component";
import { ProductDetailsComponent } from "./page/product-details/product-details.component";
import { AboutPageComponent } from "./page/about-page/about-page.component";
import { PageNotFoundComponent } from "./page/page-not-found/page-not-found.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AdminProductComponent } from "./page/admin/admin-product/admin-product.component";

@NgModule({
    declarations:[
        AppComponent,
        ProductEditComponent,
        HomePageComponent,
        ProductEditComponent,
        ProductAddComponent,
        ProductDetailsComponent,
        AboutPageComponent,
        PageNotFoundComponent,
        AdminLayoutComponent,
        AdminProductComponent,
    
    ],
    imports:[
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule  
    ],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}