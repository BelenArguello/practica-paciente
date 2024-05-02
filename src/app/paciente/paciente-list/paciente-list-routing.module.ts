import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacienteListPage } from './paciente-list.page';

const routes: Routes = [
  {
    path: '',
    component: PacienteListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacienteListPageRoutingModule {}
