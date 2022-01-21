import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackbywithasyncComponent } from './trackbywithasync.component';

describe('TrackbywithasyncComponent', () => {
  let component: TrackbywithasyncComponent;
  let fixture: ComponentFixture<TrackbywithasyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackbywithasyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackbywithasyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
