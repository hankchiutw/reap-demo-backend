import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppTestingModule } from '@app/app-testing.module';
import { HomeTestingModule } from '@app/pages/home/home-testing.module';
import { HomeUiTestingModule } from '@app/pages/home/ui/home-ui-testing.module';

import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTestingModule, HomeTestingModule, HomeUiTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
