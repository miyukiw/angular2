import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component';

const routes: Routes = [
  {
    path: '',
    component: null,
    children: [
      {
        path: '', // path: /hello
        component: HelloComponent
      },
      {
        path: 'foo', // path: /hello/foo
        component: HelloComponent
      },
      {
        path: 'bar', // path: /hello/bar
        component: HelloComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HelloRoutingModule { }
