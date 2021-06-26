import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiosignuppageComponent } from './studiosignuppage.component';

describe('StudiosignuppageComponent', () => {
  let component: StudiosignuppageComponent;
  let fixture: ComponentFixture<StudiosignuppageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiosignuppageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiosignuppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
