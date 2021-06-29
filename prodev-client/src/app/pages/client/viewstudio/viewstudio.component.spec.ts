import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientViewStudioComponent } from './viewstudio.component';

describe('ClientViewStudioComponent', () => {
  let component: ClientViewStudioComponent;
  let fixture: ComponentFixture<ClientViewStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientViewStudioComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientViewStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
