import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';

// ── Custom Validators ──────────────────────────────────────────
function phoneValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) return null;
  const value = control.value.toString();
  const phoneRegex = /^[0-9\-\+\(\)\s]{10,}$/;
  return phoneRegex.test(value) ? null : { invalidPhone: true };
}

function minAgeValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) return null;
  const year = new Date(control.value).getFullYear();
  if (year > 2010) return { tooYoung: true };
  return null;
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatStepperModule,
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class SignupComponent {

  // ── Theme ──────────────────────────────────────────────────
  darkMode = signal(true);
  toggleTheme() { this.darkMode.update(v => !v); }

  // ── UI State ───────────────────────────────────────────────
  submitted = false;

  // ── Result Data ────────────────────────────────────────────
  firstName = '';
  lastName = '';
  email = '';
  phone = '';
  gender = '';
  dateOfBirth!: Date;
  gradeLevel = '';
  department = '';
  parentName = '';
  parentPhone = '';
  parentEmail = '';
  gpa = '';
  interests: string[] = [];

  // ── Options ────────────────────────────────────────────────
  gradeLevels = ['9th Grade', '10th Grade', '11th Grade', '12th Grade'];
  departments = ['Science', 'Mathematics', 'English', 'History', 'Arts', 'Technology', 'Physical Education', 'Languages'];
  interests_list: string[] = ['Academic Competition', 'Sports', 'Arts & Culture', 'STEM Club', 'Debate', 'Community Service', 'Leadership', 'Music'];
  gpaRanges = ['Below 2.0', '2.0 - 2.5', '2.5 - 3.0', '3.0 - 3.5', '3.5 - 4.0'];

  minAge = 1;
  maxAge = 10;
  maxDate = new Date(2010, 11, 31); // Dec 31 2010 — 14 years old or older

  // ── Form ───────────────────────────────────────────────────
  form = new FormGroup({
    firstName:   new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName:    new FormControl('', [Validators.required, Validators.minLength(2)]),
    email:       new FormControl('', [Validators.required, Validators.email]),
    phone:       new FormControl('', [Validators.required, phoneValidator]),
    gender:      new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl<Date | null>(null, [Validators.required, minAgeValidator]),
    gradeLevel:  new FormControl('', [Validators.required]),
    department:  new FormControl('', [Validators.required]),
    parentName:  new FormControl('', [Validators.required, Validators.minLength(2)]),
    parentPhone: new FormControl('', [Validators.required, phoneValidator]),
    parentEmail: new FormControl('', [Validators.required, Validators.email]),
    gpa:         new FormControl('', [Validators.required]),
    agreeToTerms: new FormControl(false, [Validators.requiredTrue]),
  });

  // ── Interests ──────────────────────────────────────────────
  toggleInterest(interest: string) {
    const i = this.interests.indexOf(interest);
    i >= 0 ? this.interests.splice(i, 1) : this.interests.push(interest);
  }

  isInterestSelected(interest: string) { return this.interests.includes(interest); }

  // ── Submit ─────────────────────────────────────────────────
  onSubmit(data: any) {
    this.submitted = true;
    if (this.form.valid) {
      this.firstName   = data.firstName   ?? '';
      this.lastName    = data.lastName    ?? '';
      this.email       = data.email       ?? '';
      this.phone       = data.phone       ?? '';
      this.gender      = data.gender      ?? '';
      this.dateOfBirth = data.dateOfBirth;
      this.gradeLevel  = data.gradeLevel  ?? '';
      this.department  = data.department  ?? '';
      this.parentName  = data.parentName  ?? '';
      this.parentPhone = data.parentPhone ?? '';
      this.parentEmail = data.parentEmail ?? '';
      this.gpa         = data.gpa         ?? '';
      console.log('Registration successful!', this.form.value);
    } else {
      console.log('Form invalid');
    }
  }

  onReset() {
    this.form.reset();
    this.submitted = false;
    this.interests = [];
  }
}
