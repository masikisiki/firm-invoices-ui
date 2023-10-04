import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app.routing.module";
import { AppLayoutComponent } from './app-layout/app-layout.component';
import {MaterialModule} from "./material.module";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepicker, MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { AuthErrorComponent } from './auth-error/auth-error.component';
import {AuthInterceptor} from "./auth-error.interceptor";
import {AuthErrorInterceptor} from "./auth.interceptor";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    AuthErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FontAwesomeModule
  ],
  providers: [MatDialog,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthErrorInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
