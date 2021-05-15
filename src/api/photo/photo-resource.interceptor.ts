import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Photo } from '@app/entities';

interface PhotoResource {
  id: number;
  description: string;
  username: string;
  createdAt: Date;
}

@Injectable()
export class PhotoResourceInterceptor<T>
  implements NestInterceptor<T, PhotoResource[]> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<PhotoResource[]> {
    return next.handle().pipe(
      map((photos: Photo[]) => {
        const session = context.switchToHttp().getRequest().session;
        return photos.map(({ description, createdAt, id }) => {
          return {
            description,
            createdAt,
            id,
            username: session.user.username,
          };
        });
      }),
    );
  }
}
