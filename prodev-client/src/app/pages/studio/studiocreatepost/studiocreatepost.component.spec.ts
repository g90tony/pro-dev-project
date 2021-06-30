import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiocreatepostComponent } from './studiocreatepost.component';

describe('StudiocreatepostComponent', () => {
  let component: StudiocreatepostComponent;
  let fixture: ComponentFixture<StudiocreatepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiocreatepostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiocreatepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
