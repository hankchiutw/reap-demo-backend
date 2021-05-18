import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { LoginFormUsecase, SubmitPayload } from './login-form.usecase';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginFormUsecase],
})
export class LoginFormComponent {
  public formGroup = this.fb.group({
    username: [''],
    password: [''],
  });

  public useSignUp = false;

  public errorMessage$ = new Subject<string>();

  constructor(private fb: FormBuilder, private usecase: LoginFormUsecase) {}

  public submit() {
    const payload: SubmitPayload = {
      username: this.formValue('username'),
      password: this.formValue('password'),
    };

    const submit$ = this.useSignUp
      ? this.doSignUp(payload)
      : this.doLogin(payload);
    submit$
      .pipe(
        catchError((e) => {
          this.errorMessage$.next(e);
          return [];
        })
      )
      .subscribe();
  }

  public reset() {
    this.errorMessage$.next('');
    this.formGroup.get('username').setValue('');
    this.formGroup.get('password').setValue('');
  }

  private formValue(name: string) {
    return this.formGroup.get(name).value;
  }

  private doLogin(payload: SubmitPayload) {
    return this.usecase.doLogin(payload);
  }

  private doSignUp(payload: SubmitPayload) {
    return this.usecase.doSignUp(payload).pipe(
      tap(() => {
        this.reset();
        alert('Sign up successfully');
        this.useSignUp = false;
      })
    );
  }
}
