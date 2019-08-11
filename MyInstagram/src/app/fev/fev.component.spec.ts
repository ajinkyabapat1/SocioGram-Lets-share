import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FevComponent } from './fev.component';

describe('FevComponent', () => {
  let component: FevComponent;
  let fixture: ComponentFixture<FevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
