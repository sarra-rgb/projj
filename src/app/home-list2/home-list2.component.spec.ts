import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeList2Component } from './home-list2.component';

describe('HomeList2Component', () => {
  let component: HomeList2Component;
  let fixture: ComponentFixture<HomeList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
