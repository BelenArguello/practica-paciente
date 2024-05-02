import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacienteListPageRoutingModule } from './paciente-list-routing.module';

import { PacienteListPage } from './paciente-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacienteListPageRoutingModule
  ],
  declarations: [PacienteListPage]
})
export class PacienteListPageModule {}
