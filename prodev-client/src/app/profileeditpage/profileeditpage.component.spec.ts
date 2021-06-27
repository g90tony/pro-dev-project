import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileeditpageComponent } from './profileeditpage.component';

describe('ProfileeditpageComponent', () => {
  let component: ProfileeditpageComponent;
  let fixture: ComponentFixture<ProfileeditpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileeditpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileeditpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
