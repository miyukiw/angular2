import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: 'hello',
    loadChildren: "./hello/hello.module#HelloModule",
  },
  {
    path: 'issues',
    loadChildren: "./issues/issues.module#IssuesModule",
  },
  {
    path: 'contracts',
    loadChildren: "./contracts/contracts.module#ContractsModule",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
