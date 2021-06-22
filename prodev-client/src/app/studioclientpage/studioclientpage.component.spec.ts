import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioclientpageComponent } from './studioclientpage.component';

describe('StudioclientpageComponent', () => {
  let component: StudioclientpageComponent;
  let fixture: ComponentFixture<StudioclientpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudioclientpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudioclientpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
