import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsignupComponent } from './clientsignup.component';

describe('ClientsignupComponent', () => {
  let component: ClientsignupComponent;
  let fixture: ComponentFixture<ClientsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
