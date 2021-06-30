import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioCreateAdvertComponent } from './studiocreateadvert.component';

describe('StudioCreateAdvertComponent', () => {
  let component: StudioCreateAdvertComponent;
  let fixture: ComponentFixture<StudioCreateAdvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudioCreateAdvertComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudioCreateAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
