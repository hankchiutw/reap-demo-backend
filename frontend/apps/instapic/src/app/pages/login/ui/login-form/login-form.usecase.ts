import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, ProcedurePath } from '@app/shared';
import { tap } from 'rxjs/operators';

export interface SubmitPayload {
  username: string;
  password: string;
}

@Injectable()
export class LoginFormUsecase {
  constructor(private api: ApiService, private router: Router) {}

  public doLogin(body: SubmitPayload) {
    return this.api
      .post(ProcedurePath.authLogin, {
        body,
      })
      .pipe(
        tap(() => {
          return this.router.navigateByUrl('/');
        })
      );
  }

  public doSignUp(body: SubmitPayload) {
    return this.api.post(ProcedurePath.authSignUp, {
      body,
    });
  }
}
