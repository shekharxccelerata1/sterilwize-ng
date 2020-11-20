import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsSterilWizeComponent } from './what-is-steril-wize.component';

describe('WhatIsSterilWizeComponent', () => {
  let component: WhatIsSterilWizeComponent;
  let fixture: ComponentFixture<WhatIsSterilWizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsSterilWizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsSterilWizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
