import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { FeedbackComponent } from './feedback.component';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set `isFeedbackCompleted` as false on init', () => {
    expect(component.isFeedbackCompleted).toBeFalsy();
  });

  it('should set `isFeedbackCompleted` as true after `onSubmit` is called', () => {
    component.onSubmit();
    expect(component.isFeedbackCompleted).toBeTruthy();
  });

  it('should reset form after `onSubmit` is called', () => {
    component.profileForm.value.firstName = "John";
    expect(component.profileForm.value.firstName).not.toBeNull();
    component.onSubmit();
    expect(component.profileForm.value.firstName).toBeNull();
  });

  afterEach(() => {
    component.isFeedbackCompleted = false;
  });

});
