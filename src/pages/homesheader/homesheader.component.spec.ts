import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesheaderComponent } from './homesheader.component';

describe('HomesheaderComponent', () => {
  let component: HomesheaderComponent;
  let fixture: ComponentFixture<HomesheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomesheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
