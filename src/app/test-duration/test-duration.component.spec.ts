import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDurationComponent } from './test-duration.component';

describe('TestDurationComponent', () => {
  let component: TestDurationComponent;
  let fixture: ComponentFixture<TestDurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
