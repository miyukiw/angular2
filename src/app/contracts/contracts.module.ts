import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ContractsRoutingModule } from './contracts-routing.module';
import { ContractsComponent } from './contracts.component';
import { ContractsFormComponent } from './form/contracts-form.component';
import { FormGroupInputComponent } from '../shared/form/form-group-input/form-group-input.component';
import { RepoSearchComponent } from './form/repo-search/repo-search.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ContractsRoutingModule
  ],
  declarations: [
    ContractsComponent,
    ContractsFormComponent,
    FormGroupInputComponent,
    RepoSearchComponent,
  ],
  providers: []
})
export class ContractsModule { }
