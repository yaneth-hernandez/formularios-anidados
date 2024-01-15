import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'formularios-anidados';

  formulario!: FormGroup;

  paises: string[] = ['Pais1','Pais2', 'Pais3'];

  estados: string[] = [];

  ciudades: string[] = [];

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      pais: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.formulario.get('pais')?.valueChanges.subscribe((pais) => {
      this.estados = this.obtenerEstadosPorPais(pais)
      this.formulario.get('estado')?.setValue('')
      this.formulario.get('ciudad')?.setValue('')
    });

    this.formulario.get('estado')?.valueChanges.subscribe((estado) => {
      this.estados = this.obtenerCiudadesPorEstado(estado)
      this.formulario.get('ciudad')?.setValue('')
    });
  }


  //gestion de pasos: gestion de como loa usuarios ingresan los datos

  obtenerEstadosPorPais(pais:string):string[]{
    return [`Estado1 de: ${pais}`,`Estado2 de: ${pais}`,`Estado3 de: ${pais}`]
  }

  obtenerCiudadesPorEstado(estado:string){
    return [`Ciudad1 de: ${estado}`,`Ciudad2 de: ${estado}`,`Ciudad3 de: ${estado}`]
  }

  enviarFormulario(){
    console.log('Formulario enviado: ', this.formulario.value)
  }
}