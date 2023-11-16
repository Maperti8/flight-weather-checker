import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  reportTypes: string[] = ['METAR', 'TAF', 'SIGMET'];
  newOptions: string[] = ['Option1', 'Option2', 'Option3']; // New array for the dropdown options
  briefingForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.briefingForm = this.fb.group({
      METAR: false,
      SIGMET: false,
      TAF: false,
      selectedOptions: [] // New FormControl for the multiple select dropdown
    });
  }

  generateBriefing() {
    if (this.briefingForm.valid) {
      const formValue = this.briefingForm.value;
      console.log('Generating Briefing...', formValue);
    }
  }
}
