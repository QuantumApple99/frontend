import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInBodyComponent } from './logged-in-body.component';

describe('LoggedInBodyComponent', () => {
  let component: LoggedInBodyComponent;
  let fixture: ComponentFixture<LoggedInBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoggedInBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggedInBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
