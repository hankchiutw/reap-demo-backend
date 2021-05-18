import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppTestingModule } from '@app/app-testing.module';
import { HomeTestingModule } from '@app/pages/home/home-testing.module';

import { PhotoNavComponent } from './photo-nav.component';

describe('PhotoNavComponent', () => {
  let component: PhotoNavComponent;
  let fixture: ComponentFixture<PhotoNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTestingModule, HomeTestingModule],
      declarations: [PhotoNavComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
