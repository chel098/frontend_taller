// src/app/new-cliente/new-cliente.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { cliente } from '../models/Client';


@Component({
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule, MatFormFieldModule],
  standalone: true,
  selector: 'app-new-cliente',
  templateUrl: './new-cliente.component.html',
  styleUrls: ['./new-cliente.component.css']
})
export class NewClienteComponent implements OnInit {
  
  clienteForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private clienteService: ApiService) { }

  ngOnInit(): void {
    this.clienteForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      // Agrega más campos según sea necesario
    });
  }

  onSubmit(): void {
    if (this.clienteForm.valid) {
      const nuevoCliente: cliente = this.clienteForm.value;
      this.clienteService.getAddClient(nuevoCliente).subscribe(() => {
        console.log('Cliente agregado con éxito');
        // Reiniciar el formulario o realizar otras acciones después de agregar el cliente
      });
    }
  }
}



