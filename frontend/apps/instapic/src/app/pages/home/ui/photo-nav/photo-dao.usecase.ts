import { Injectable } from '@angular/core';
import { AuthStatus, Photo } from '@app/entities';
import { ApiService, ResourcePath } from '@app/shared';
import { Observable, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { HomeContext } from '../../entities';

@Injectable()
export class PhotoDaoUsecase {
  private get myId() {
    return this.authStatus.user.id;
  }

  constructor(
    private api: ApiService,
    private context: HomeContext,
    private authStatus: AuthStatus
  ) {}

  fetchPhotos(): Observable<Photo[]> {
    return combineLatest([
      this.context.selectedUserId$,
      this.context.newestFirst$,
    ]).pipe(
      switchMap(([userId, newestFirst]) => {
        const list$ =
          userId === this.myId ? this.context.myPhotos$ : this.getList(userId);
        return list$.pipe(map((list) => sortByCreatedAt(list, newestFirst)));
      })
    );
  }

  private getList(userId: number): Observable<Photo[]> {
    return this.api.get<Photo[]>(ResourcePath.photo, {
      params: {
        userId,
      },
    });
  }
}

function sortByCreatedAt(list: Photo[], newestFirst: boolean): Photo[] {
  const t = (photo: Photo) => new Date(photo.createdAt).getTime();
  return list.sort((a, b) => (newestFirst ? t(b) - t(a) : t(a) - t(b)));
}
