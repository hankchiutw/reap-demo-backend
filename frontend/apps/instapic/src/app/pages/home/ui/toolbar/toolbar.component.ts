import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthStatus } from '@app/entities';
import { HomeContext } from '../../entities';
import { ToolbarUsecase } from './toolbar.usecase';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ToolbarUsecase],
})
export class ToolbarComponent {
  get me() {
    return this.authStatus.user;
  }

  newestFirst = this.context.newestFirst$.value;

  constructor(
    private usecase: ToolbarUsecase,
    private context: HomeContext,
    private authStatus: AuthStatus
  ) {}

  openUploadForm() {
    this.usecase.openUploadForm();
  }

  setNewestFirst(value: boolean) {
    this.usecase.setNewestFirst(value);
  }
}
