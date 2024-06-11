// src/app/new-cliente/new-cliente.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';


@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-new-cliente',
  templateUrl: './new-cliente.component.html',
  styleUrls: ['./new-cliente.component.css']
})
export class NewClienteComponent implements OnInit {
  clients: any[] = [];

  constructor(private apiService: ApiService) { }


  ngOnInit(): void {
    this.apiService.getClientList().subscribe((data: any[]) => {
      this.clients = data;
    });
  }
}

