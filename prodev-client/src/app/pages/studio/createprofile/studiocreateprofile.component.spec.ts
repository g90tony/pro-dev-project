import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioCreateProfileComponent } from './studiocreateprofile.component';

describe('StudioCreateProfileComponent', () => {
  let component: StudioCreateProfileComponent;
  let fixture: ComponentFixture<StudioCreateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudioCreateProfileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudioCreateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
