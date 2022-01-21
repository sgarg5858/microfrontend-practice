import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotrackbyComponent } from './notrackby.component';

describe('NotrackbyComponent', () => {
  let component: NotrackbyComponent;
  let fixture: ComponentFixture<NotrackbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotrackbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotrackbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
