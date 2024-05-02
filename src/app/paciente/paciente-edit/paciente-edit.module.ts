import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacienteEditPageRoutingModule } from './paciente-edit-routing.module';

import { PacienteEditPage } from './paciente-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacienteEditPageRoutingModule
  ],
  declarations: [PacienteEditPage]
})
export class PacienteEditPageModule {}
