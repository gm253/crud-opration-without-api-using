import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path:'form',
    component:FormComponent
  },
  {
    path:'table',
    component:TableComponent
  },
  {
    path:'',
    component:TableComponent
  },
  {
    path:'add',
    component:FormComponent
  },
  {
    path:'edit/:id',
    component:FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
