import { Component } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
    jsonData: any;

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.datosService.getData().subscribe(data => {
      this.jsonData = data;
      console.log(data);
    });
  }
}
