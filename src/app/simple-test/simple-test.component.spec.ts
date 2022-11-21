import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTestComponent } from './simple-test.component';

describe('SimpleTestComponent', () => {
  let component: SimpleTestComponent;
  let fixture: ComponentFixture<SimpleTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
