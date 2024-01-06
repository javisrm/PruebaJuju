import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Libro } from 'src/app/models/libro';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.css']
})
export class CrearLibroComponent implements OnInit {

  libroForm: FormGroup;
  titulo = "Crear libro"
  
  
  id: string | null
  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService, private _libroService: LibroService, private aRouter: ActivatedRoute ){


    this.libroForm= this.fb.group({
      titulo:['',Validators.required],
      autor:['',Validators.required],
      estado:['',Validators.required],
      anioPublicacion:['',Validators.required],
    })    

    this.id= this.aRouter.snapshot.paramMap.get('id')
  }
  ngOnInit(): void {
    this.esEditar();
  }
  agregarLibro(){
    console.log(this.libroForm.get('libro')?.value)

    const LIBRO: Libro={
      titulo: this.libroForm.get('titulo')?.value,
      autor:  this.libroForm.get('autor')?.value,
      estado: this.libroForm.get('estado')?.value,
      anioPublicacion:  this.libroForm.get('anioPublicacion')?.value,
    }

    if(this.id !== null){
      //se edita el libro
      this._libroService.editarLibro(this.id, LIBRO).subscribe(data=>{
        this.toastr.success('El libro fue actualizado con exito', 'Libro Actualizado!');
        this.router.navigate(['/'])
      },error=>{
        console.log(error);
        this.libroForm.reset();
      });

    }else{
      //creamos el libro
      console.log(LIBRO);
    this._libroService.guadarLibro(LIBRO).subscribe(data=>{
      this.toastr.success('El libro fue registrado con exito', 'Libro Registrado!');
      this.router.navigate(['/'])
    },error=>{
      console.log(error);
      this.libroForm.reset();
    });
    } 
      
  }
esEditar(){
  if(this.id != null){
    this.titulo ='editar libro';
    this._libroService.obtenerLibro(this.id).subscribe(data=>{
      this.libroForm.setValue({
        titulo: data.titulo,
        autor: data.autor,
        estado:data.estado,
        anioPublicacion: data.anioPublicacion,

      })
    })
  }
}

}
