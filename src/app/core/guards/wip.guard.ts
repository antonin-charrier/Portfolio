import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WipService } from '../services/wip.service';

@Injectable({
  providedIn: 'root'
})
export class WipGuard implements CanActivate {

  constructor(
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (WipService.isWip(state.url)) {
      return true;
    } else {
      this.router.navigate(['wip']);
      return false;
    }
  }
}
