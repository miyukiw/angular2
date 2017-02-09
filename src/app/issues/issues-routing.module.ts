import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssuesComponent } from './issues.component';
import { IssuesDetailComponent } from './issues-detail.component';

const routes: Routes = [
  {
    path: '',
    component: null,
    children: [
      {
        path: '', // path: /issues
        component: IssuesComponent
      },
      {
        path: ':id', // path: /hello/1234
        component: IssuesDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class IssuesRoutingModule { }
