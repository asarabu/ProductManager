import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductDetailGuard implements CanActivate{
 /**
  *
  */
 constructor(private route: Router) {
 }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const id = Number(route.paramMap.get('id'));

    if(isNaN(id) || id < 1)
    {
      alert('Invalid Id');
      this.route.navigate(['/products']);
      return false;
    }
    return true;
  }
  
}