import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subscriber, EMPTY } from 'rxjs';
import { AuthenticationService } from '@photon/service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return new Observable<boolean>((subscriber: Subscriber<boolean>) => {
      try {
        const isAuthenticated = this.authenticationService.getToken() ? true : false;

        // No auth
        if (!isAuthenticated && next.routeConfig.path !== 'info') {
          this.router.navigate(['/info'], { queryParams: { redirectUri: state.url} });
          subscriber.next(false);
          subscriber.complete();
          return;
        } else if (isAuthenticated && next.routeConfig.path !== 'info') {
          subscriber.next(true);
          subscriber.complete();
          return;
        }  else if (isAuthenticated && next.routeConfig.path === 'info') {
          this.router.navigate(['/']);
          subscriber.next(true);
          subscriber.complete();
          return;
        }

        subscriber.next(true);
        subscriber.complete();
      } catch (error) {
        console.log(error);
        subscriber.error(true);
        subscriber.complete();
      }
    });
  }
}
