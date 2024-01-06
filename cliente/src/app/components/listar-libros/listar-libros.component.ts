import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-listar-libros',
  templateUrl: './listar-libros.component.html',
  styleUrls: ['./listar-libros.component.css']
})
export class ListarLibrosComponent implements OnInit {
  listLibros: Libro[] = [];

  constructor(private _libroService: LibroService, private toasr: ToastrService) { }
  ngOnInit(): void {
    this.obtenerLibro();
  }

  obtenerLibro() {
    this._libroService.getLibros().subscribe(data => {
      this.listLibros = data
    }, error => {
      console.log(error);

    });

  }

  eliminarLibro(id: any) {
    this._libroService.eliminarLibro(id).subscribe(data => {
      this.toasr.error('El libro fue eliminado con exito', ' Libro eliminado')
      this.obtenerLibro();
    }, error => {
      console.log(error);

    });

  }
}

