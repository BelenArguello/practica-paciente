import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PacienteEditPage } from './paciente-edit.page';

describe('PacienteEditPage', () => {
  let component: PacienteEditPage;
  let fixture: ComponentFixture<PacienteEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
