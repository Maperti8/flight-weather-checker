// material components
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
// angular flex layout
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatCheckboxModule,
    FlexLayoutModule,
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatCheckboxModule,
    FlexLayoutModule,
  ]
})
export class MaterialModule {}
