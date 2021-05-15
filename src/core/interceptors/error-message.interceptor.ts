import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiResult } from '../interfaces';

@Injectable()
export class ErrorMessageInterceptor<T>
  implements NestInterceptor<T, ApiResult> {
  intercept(
    _context: ExecutionContext,
    next: CallHandler,
  ): Observable<ApiResult> {
    return next.handle().pipe(
      map((result) => ({ result })),
      catchError((e) => {
        return of({
          result: null,
          errorMessage: e.message,
        });
      }),
    );
  }
}
