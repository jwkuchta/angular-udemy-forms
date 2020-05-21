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
  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  }

  submitted = false

  suggestUserName() {
    const suggestedName = 'Superuser';
    // OVERWRITED OTHER VALUES ON THE FORM, NOT JUST USERDATA
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
    this.user.username = this.signupForm.value.userData.username
    this.user.email = this.signupForm.value.userData.email
    this.user.secret = this.signupForm.value.secret
    this.user.answer = this.signupForm.value.answer
    this.user.gender = this.signupForm.value.gender

    this.submitted = true

  }
}
