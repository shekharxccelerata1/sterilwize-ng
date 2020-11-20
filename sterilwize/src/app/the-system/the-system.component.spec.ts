import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheSystemComponent } from './the-system.component';

describe('TheSystemComponent', () => {
  let component: TheSystemComponent;
  let fixture: ComponentFixture<TheSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
