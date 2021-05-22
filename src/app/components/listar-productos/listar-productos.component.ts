import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.sass']
})
export class ListarProductosComponent implements OnInit {
  productos: Producto[] =[];
  constructor() { }

  ngOnInit(): void {
      }

}
