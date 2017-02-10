import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesRoutingModule } from './issues-routing.module';
import { IssuesComponent } from './list/issues.component';
import { IssuesDetailComponent } from './detail/issues-detail.component';
import { IssuesService } from './issues.service';

@NgModule({
  imports: [
    CommonModule,
    IssuesRoutingModule
  ],
  declarations: [
    IssuesComponent,
    IssuesDetailComponent
  ],
  providers: [IssuesService]
})
export class IssuesModule { }
