import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhySterilwizeComponent } from './why-sterilwize.component';

describe('WhySterilwizeComponent', () => {
  let component: WhySterilwizeComponent;
  let fixture: ComponentFixture<WhySterilwizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhySterilwizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhySterilwizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
