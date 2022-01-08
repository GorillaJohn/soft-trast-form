import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {


  reportForm = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    number: ['', [Validators.required, Validators.minLength(10)]],
    topic: ['', [Validators.required]],
    message: ['', [Validators.required]],
    captcha: ['', [Validators.required, Validators.minLength(4)]]
  });

  formHasBeenSent = false

  constructor(private fb: FormBuilder, private fs: FormServiceService) {

  }

  get _username() {
    return this.reportForm.get('username')
  }

  get _email() {
    return this.reportForm.get('email')
  }

  get _number() {
    return this.reportForm.get('number')
  }

  get _topic() {
    return this.reportForm.get('topic')
  }

  get _message() {
    return this.reportForm.get('message')
  }

  get _captcha() {
    return this.reportForm.get('captcha')
  }


  onSubmit(): void {
    this.formHasBeenSent = true
    this.reportForm.reset();
  }

  ngOnInit(): void {

  }

}
