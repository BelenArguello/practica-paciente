import { Component, OnInit } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.page.html',
  styleUrls: ['./paciente-list.page.scss'],
})
export class PacienteListPage implements OnInit {

  constructor(
    private readonly firestore: Firestore
  ) { }

  listaPacientes = new Array();
  ngOnInit() {
  }

  listarAlumnos = () => {
    console.log("listar alumnos");
    const pacientesRef = collection(this.firestore, 'paciente');
    collectionData(pacientesRef, { idField: 'id'}).subscribe(respuesta=>{
      console.log("estos son los pacientes", respuesta);
      this.listaPacientes=respuesta;
    })
  }
}
