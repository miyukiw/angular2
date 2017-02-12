import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContractsRoutingModule } from './contracts-routing.module';
import { ContractsComponent } from './contracts.component';
import { ContractsFormComponent } from './form/contracts-form.component';
import { FormGroupInputComponent } from '../shared/form/form-group-input/form-group-input.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContractsRoutingModule
  ],
  declarations: [
    ContractsComponent,
    ContractsFormComponent,
    FormGroupInputComponent,
  ],
  providers: []
})
export class ContractsModule { }
