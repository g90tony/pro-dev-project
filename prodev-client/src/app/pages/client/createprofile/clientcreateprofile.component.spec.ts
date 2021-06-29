import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCreateProfileComponent } from './clientcreateprofile.component';

describe('ClientCreateProfileComponent', () => {
  let component: ClientCreateProfileComponent;
  let fixture: ComponentFixture<ClientCreateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientCreateProfileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCreateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
