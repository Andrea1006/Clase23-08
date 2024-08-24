import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-pag',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './pag.component.html',
  styleUrls: ['./pag.component.css']
})

export class PagComponent {
  formulario: FormGroup;
  datosIngresados: Array<{nombre: string, email: string}> = [];

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: [''],
      email: ['']
    });
  }

  enviarDatos() {
    this.datosIngresados.push(this.formulario.value);
    this.formulario.reset(); // Limpiar el formulario después de enviar
  }
}
