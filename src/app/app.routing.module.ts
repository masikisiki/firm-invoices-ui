import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppLayoutComponent} from "./app-layout/app-layout.component";
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {AuthErrorComponent} from "./auth-error/auth-error.component";


const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'about', component: AboutComponent},
      { path: 'expenses', loadChildren: () => import('./expenses/expenses.module').then(m => m.ExpensesModule) },
      { path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule) },
      {path: 'error/unauthorized', component: AuthErrorComponent},
    ],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
