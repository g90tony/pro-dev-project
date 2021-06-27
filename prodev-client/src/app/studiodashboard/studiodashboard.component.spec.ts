import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiodashboardComponent } from './studiodashboard.component';

describe('StudiodashboardComponent', () => {
  let component: StudiodashboardComponent;
  let fixture: ComponentFixture<StudiodashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiodashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiodashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
