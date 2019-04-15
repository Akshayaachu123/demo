import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignteamComponent } from './assignteam.component';

describe('AssignteamComponent', () => {
  let component: AssignteamComponent;
  let fixture: ComponentFixture<AssignteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
