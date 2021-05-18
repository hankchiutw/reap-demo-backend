import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppTestingModule } from '@app/app-testing.module';
import { HomeTestingModule } from '@app/pages/home/home-testing.module';
import { HomeUiTestingModule } from '@app/pages/home/ui/home-ui-testing.module';

import { UploadFormComponent } from './upload-form.component';

describe('UploadFormComponent', () => {
  let component: UploadFormComponent;
  let fixture: ComponentFixture<UploadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTestingModule, HomeTestingModule, HomeUiTestingModule],
      declarations: [UploadFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
