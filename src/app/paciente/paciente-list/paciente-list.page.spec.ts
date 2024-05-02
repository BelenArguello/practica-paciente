import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PacienteListPage } from './paciente-list.page';

describe('PacienteListPage', () => {
  let component: PacienteListPage;
  let fixture: ComponentFixture<PacienteListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
