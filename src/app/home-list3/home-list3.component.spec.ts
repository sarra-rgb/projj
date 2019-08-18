import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeList3Component } from './home-list3.component';

describe('HomeList3Component', () => {
  let component: HomeList3Component;
  let fixture: ComponentFixture<HomeList3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeList3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeList3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
