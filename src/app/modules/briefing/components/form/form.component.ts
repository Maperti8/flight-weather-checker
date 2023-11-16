import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  airports: string[] = ['LZIB', 'LKPR'];
  countries: string[] = ['KZ', 'EG', 'CZ'];
  reportTypes: string[] = ['METAR', 'TAF', 'SIGMET'];
  briefingForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.briefingForm = this.fb.group({
      METAR: false,
      SIGMET: false,
      TAF: false,
      selectedOptions: []   
    });
  }

  generateBriefing() {
    if (this.briefingForm.valid) {
      const formValue = this.briefingForm.value;
      console.log('Generating Briefing...', formValue);
    }
  }
}
