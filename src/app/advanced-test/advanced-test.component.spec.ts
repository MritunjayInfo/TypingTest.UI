import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedTestComponent } from './advanced-test.component';

describe('AdvancedTestComponent', () => {
  let component: AdvancedTestComponent;
  let fixture: ComponentFixture<AdvancedTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
