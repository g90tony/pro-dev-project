import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiologinComponent } from './studiologin.component';

describe('StudiologinComponent', () => {
  let component: StudiologinComponent;
  let fixture: ComponentFixture<StudiologinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiologinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
