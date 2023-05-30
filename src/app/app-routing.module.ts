import {NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BaseLayoutComponent } from "./layouts/base-layout/base-layout.component";
import { HomePageComponent } from "./page/home-page/home-page.component";
import { AboutPageComponent } from "./page/about-page/about-page.component";
import { ProductDetailsComponent } from "./page/product-details/product-details.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { DashboardComponent } from "./page/admin/dashboard/dashboard.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { PageNotFoundComponent } from "./page/page-not-found/page-not-found.component";

const routes: Routes=[
    {
        path:'', component:BaseLayoutComponent,
        children:[
            {path:'', component:HomePageComponent},
            {path:'about', component: AboutPageComponent,},
            {path:'product/:id', component:ProductDetailsComponent}
        ]
    },
    {
        path:'admin', component:AdminLayoutComponent,
        children:[
            {path:'', redirectTo:'DashboardComponent', pathMatch:'full'},
            {path:'dashbord', component: DashboardComponent},
            {path:'product', component:ProductListComponent}
        ]
    },
    {path:'**', component:PageNotFoundComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}