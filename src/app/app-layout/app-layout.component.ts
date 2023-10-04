import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent {

  constructor(private authService: AuthService ,private activatedRoute : ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe({
      next: (params)=>{
        if(params['authtoken']){
            const authToken = params['authtoken'];
            this.authService.setAuthToken(authToken);
            this.router.navigate(['invoices']).then(()=>{});
        }
      }
    })
  }

  public get isAuthenticated (){
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
  }
}
