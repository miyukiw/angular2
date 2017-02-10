import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContractsRoutingModule } from './contracts-routing.module';
import { ContractsComponent } from './contracts.component';
import { ContractsFormComponent } from './form/contracts-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContractsRoutingModule
  ],
  declarations: [
    ContractsComponent,
    ContractsFormComponent
  ],
  providers: []
})
export class ContractsModule { }