import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  stations: string[] = ['LZIB', 'LKPR'];
  countries: string[] = ['KZ', 'EG', 'CZ'];
  reportTypes: string[] = ['METAR', 'TAF', 'SIGMET'];
  briefingForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.briefingForm = this.fb.group({
      selectedStations: [],
      selectedCountries: [],
      reportTypes: this.fb.group({
        METAR: false,
        SIGMET: false,
        TAF: false,
      }),
    });
  }

  getReportTypeControl(reportType: string) {
    return (this.briefingForm.get('reportTypes') as FormGroup).get(reportType) as FormControl;
  }

  generateBriefing() {
    if (this.briefingForm.valid) {
      const formValue = this.briefingForm.value;

      const selectedReportTypes = Object.keys(formValue.reportTypes)
                                       .filter(type => formValue.reportTypes[type])
                                       .map(type => type);

      const briefingObject = {
        id: 'query01',
        method: 'query',
        params: [
          {
            id: 'briefing01',
            reportTypes: selectedReportTypes,
            stations: formValue.selectedStations || [], 
            countries: formValue.selectedCountries || [], 
          },
        ],
      };

      console.log('Generating Briefing...', briefingObject);
    }
  }
}
