import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloModule } from "./hello/hello.module";

export function loadHelloModule(): any {
  return HelloModule;
}

export const routes: Routes = [
  {
    path: 'hello',
    loadChildren: loadHelloModule,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
