import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') signupForm: NgForm// alternative to passing the form directly to onSubmit
  defaultQuestion = 'pet'
  answer
  genders = ["male", "female", "other"]

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: 'something@something.something',
    //   },
    //   secret: 'pet',
    //   answer: 'duh',
    //   gender: 'other'
    // })
    // BETTER APPROACH
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

  // onSubmit(form: NgForm) {
  //   console.log(form)
  // }

  onSubmit() {
    console.log(this.signupForm)
  }
}
