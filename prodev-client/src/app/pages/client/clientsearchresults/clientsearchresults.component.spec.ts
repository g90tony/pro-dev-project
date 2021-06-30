import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsearchresultsComponent } from './clientsearchresults.component';

describe('ClientsearchresultsComponent', () => {
  let component: ClientsearchresultsComponent;
  let fixture: ComponentFixture<ClientsearchresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsearchresultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsearchresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
