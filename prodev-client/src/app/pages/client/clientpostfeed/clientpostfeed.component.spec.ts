import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientpostfeedComponent } from './clientpostfeed.component';

describe('ClientpostfeedComponent', () => {
  let component: ClientpostfeedComponent;
  let fixture: ComponentFixture<ClientpostfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientpostfeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientpostfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
