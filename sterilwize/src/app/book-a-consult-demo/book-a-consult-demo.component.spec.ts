import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAConsultDemoComponent } from './book-a-consult-demo.component';

describe('BookAConsultDemoComponent', () => {
  let component: BookAConsultDemoComponent;
  let fixture: ComponentFixture<BookAConsultDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAConsultDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAConsultDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
