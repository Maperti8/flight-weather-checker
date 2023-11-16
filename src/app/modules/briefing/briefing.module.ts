import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// components
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
// services
import { OpmetService } from './services/opmet.service';
// material
import { MaterialModule } from '../material/material-module';
// routing 
import { BriefingRoutingModule } from './briefing-routing';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    FormComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    BriefingRoutingModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [
    OpmetService,
  ],
})
export class BriefingModule { }
