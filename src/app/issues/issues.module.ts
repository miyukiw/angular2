import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesRoutingModule } from './issues-routing.module';
import { IssuesComponent } from './issues.component';
import { IssuesDetailComponent } from './issues-detail.component';

@NgModule({
  imports: [
    CommonModule,
    IssuesRoutingModule
  ],
  declarations: [
    IssuesComponent,
    IssuesDetailComponent
  ]
})
export class IssuesModule { }
