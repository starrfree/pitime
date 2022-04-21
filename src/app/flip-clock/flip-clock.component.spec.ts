import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipClockComponent } from './flip-clock.component';

describe('FlipClockComponent', () => {
  let component: FlipClockComponent;
  let fixture: ComponentFixture<FlipClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipClockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
