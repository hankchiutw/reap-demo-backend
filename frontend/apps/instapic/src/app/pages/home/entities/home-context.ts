import { Injectable } from '@angular/core';
import { Photo } from '@app/entities';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable()
export class HomeContext {
  selectedUserId$ = new ReplaySubject<number>(1);
  myPhotos$ = new BehaviorSubject<Photo[]>([]);
  newestFirst$ = new BehaviorSubject<boolean>(true);
}
