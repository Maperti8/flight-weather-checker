import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// components
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
// material
import { MaterialModule } from '../material/material-module';
// routing 
import { BriefingRoutingModule } from './briefing-routing';



@NgModule({
  declarations: [
    FormComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    BriefingRoutingModule,
    MaterialModule,
  ]
})
export class BriefingModule { }
