import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCatComponent } from './components/add-cat/add-cat.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MenPageComponent } from './components/men-page/men-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { SignupComponent } from './components/signup/signup.component';
import { UsersComponent } from './components/users/users.component';
import { WomenPgeComponent } from './components/women-pge/women-pge.component';
import { GuardNameGuard } from './guard-name.guard';

const routes: Routes = [
  {path:'', redirectTo: "login" , pathMatch: "full"},
  {path:'' , component: MainLayoutComponent , children:[
    {path : 'home' ,component: HomeComponent ,canActivate: [GuardNameGuard] },
    {path : 'products' , component: ProductsComponent,canActivate: [GuardNameGuard]},
    {path : 'men' , component: MenPageComponent,canActivate: [GuardNameGuard]},
    {path : 'women' , component: WomenPgeComponent,canActivate: [GuardNameGuard]},
    {path : 'addAdmin', component: SignupComponent,canActivate: [GuardNameGuard]},
    {path : 'addCat' , component: AddCatComponent,canActivate: [GuardNameGuard]},
    {path : 'documents' , component: FileUploadComponent,canActivate: [GuardNameGuard]},
    {path : 'users' , component: UsersComponent,canActivate: [GuardNameGuard]},


  ]},
  {path : 'login', component: LoginComponent},
  {path : "**" , component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
