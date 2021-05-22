import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
} from '@angular/core';
import { AuthStatus, User } from '@app/entities';
import { Observable } from 'rxjs';
import { HomeContext } from '../../entities';
import { SidebarUsecase } from './sidebar.usecase';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SidebarUsecase],
})
export class SidebarComponent implements OnInit {
  otherUsers$: Observable<User[]>;
  selectedUserId$ = this.context.selectedUserId$;

  isOff = true;

  get myId() {
    return this.authStatus.user?.id;
  }

  @HostBinding('class')
  get offClass() {
    return this.isOff ? 'off' : '';
  }

  constructor(
    private usecase: SidebarUsecase,
    private context: HomeContext,
    private authStatus: AuthStatus
  ) {}

  ngOnInit(): void {
    this.selectUser(this.myId);
    this.usecase.fetchMyPhotos();
    this.otherUsers$ = this.usecase.fetchOtherUsers();
  }

  selectUser(userId: number) {
    this.usecase.selectUser(userId);
  }

  logout() {
    this.usecase.logout().subscribe();
  }
}
