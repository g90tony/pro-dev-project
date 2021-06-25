import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiosignupComponent } from './studiosignup.component';

describe('StudiosignupComponent', () => {
  let component: StudiosignupComponent;
  let fixture: ComponentFixture<StudiosignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiosignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiosignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
