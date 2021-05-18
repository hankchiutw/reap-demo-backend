import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthStatus, Photo, User } from '@app/entities';
import { ApiService, ProcedurePath, UserRaw } from '@app/shared';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private api: ApiService,
    private authStatus: AuthStatus,
    private router: Router
  ) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<true | UrlTree> {
    const isLoginPage = state.url.startsWith('/login');

    return this.resolveAuthStatus().pipe(
      map(({ authorized }) => {
        if ((authorized && !isLoginPage) || (!authorized && isLoginPage)) {
          return true;
        }

        if (authorized && isLoginPage) {
          return this.router.parseUrl('/');
        }

        if (!authorized && !isLoginPage) {
          return this.router.parseUrl('/login');
        }
      })
    );
  }

  private resolveAuthStatus(): Observable<AuthStatus> {
    return this.api.get<UserRaw>(ProcedurePath.me).pipe(
      map(toUser),
      map((user) => {
        this.authStatus.user = user;
        return this.authStatus;
      }),
      catchError(() => {
        this.authStatus.user = null;
        return of(this.authStatus);
      })
    );
  }
}

function toUser(raw: UserRaw): User {
  const user = new User();
  Object.assign(user, raw);

  user.photos = raw.photos.map((rawPhoto) => {
    const photo = new Photo();
    Object.assign(photo, rawPhoto);
    return photo;
  });

  return user;
}
