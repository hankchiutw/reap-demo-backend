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
    _context: ExecutionContext,
    next: CallHandler,
  ): Observable<PhotoResource[]> {
    return next.handle().pipe(
      map((photos: Photo[]) => {
        return photos.map(({ description, createdAt, id, user }) => {
          return {
            description,
            createdAt,
            id,
            username: user.username,
          };
        });
      }),
    );
  }
}
