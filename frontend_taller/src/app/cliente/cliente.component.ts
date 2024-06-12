import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { cliente } from '../models/Client';

@Component({
  selector: 'app-cliente',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  clients: any[] = [];

  constructor(private apiService: ApiService) { }


  ngOnInit(): void {
    this.apiService.getClientList().subscribe((data: any[]) => {
      this.clients = data;
    });
  }
}
