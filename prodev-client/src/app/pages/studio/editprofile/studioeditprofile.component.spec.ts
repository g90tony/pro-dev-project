import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioEditProfileComponent } from './studioeditprofile.component';

describe('StudioEditProfileComponent', () => {
  let component: StudioEditProfileComponent;
  let fixture: ComponentFixture<StudioEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudioEditProfileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudioEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
