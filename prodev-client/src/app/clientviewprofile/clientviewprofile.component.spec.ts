import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientviewprofileComponent } from './clientviewprofile.component';

describe('ClientviewprofileComponent', () => {
  let component: ClientviewprofileComponent;
  let fixture: ComponentFixture<ClientviewprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientviewprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientviewprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
