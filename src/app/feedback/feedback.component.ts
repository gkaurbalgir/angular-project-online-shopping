import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  isFeedbackCompleted: boolean;
  
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    }),
    feedback: ['', Validators.required]
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.isFeedbackCompleted = false;
  }

  onSubmit() {
    console.warn(this.profileForm.value);
    this.isFeedbackCompleted = true;
    this.profileForm.reset();
  }

}
