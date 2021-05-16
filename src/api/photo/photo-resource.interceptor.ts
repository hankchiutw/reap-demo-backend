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
  implements NestInterceptor<T, PhotoResource | PhotoResource[]> {
  intercept(
    _context: ExecutionContext,
    next: CallHandler,
  ): Observable<PhotoResource | PhotoResource[]> {
    return next.handle().pipe(
      map((photos: Photo | Photo[]) => {
        if (Array.isArray(photos)) {
          return photos.map(transform);
        }
        return transform(photos);
      }),
    );
  }
}

function transform(photo: Photo): PhotoResource {
  const { description, createdAt, id, user } = photo;
  return {
    description,
    createdAt,
    id,
    username: user.username,
  };
}
