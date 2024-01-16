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
  paisSeleccionado: string = '';
  estadoSeleccionado: string = '';

  paises: string[] = ['Colombia', 'Chile', 'Brasil'];

  estados: Record<string,string[]> = {
    '': [],
    'Colombia': ['Cundinamarca', 'Antioquia'],
    'Chile':['Santiago','Valparaiso'],
    'Brasil':['São Paulo', 'Rio de Janeiro']
  };

  ciudades: Record<string, Record<string,string[]>>  = {
    '': {'': []},
    'Colombia':{
      'Cundinamarca':['Bogotá', 'Soacha', 'Chía', 'Funza'],
      'Antioquia':['Medellin','Rio Negro', 'Bello'],
    },
    'Chile':{
      'Santiago':['Santiago Centro', 'Providencia', 'Las Condes', 'Ñuñoa', 'La Florida'],
      'Valparaiso':[ 'Viña del Mar', 'Quilpué', 'Concón', 'Quillota']
    },
    'Brasil': {
      'São Paulo': ['São Paulo Centro', 'Guarulhos', 'Santo André', 'São Bernardo', 'Osasco'],
      'Rio de Janeiro': ['Rio de Janeiro Centro', 'Niterói', 'São Gonçalo', 'Duque de Caxias', 'Nova Iguaçu']
    }
  };

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      pais: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      ciudad: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // this.formulario.get('pais')?.valueChanges.subscribe((pais) => {
    //   this.estados = this.obtenerEstadosPorPais(pais)
    //   this.formulario.get('estado')?.setValue('')
    //   this.formulario.get('ciudad')?.setValue('')
    // });

    // this.formulario.get('estado')?.valueChanges.subscribe((estado) => {
    //   this.estados = this.obtenerCiudadesPorEstado(estado)
    //   this.formulario.get('ciudad')?.setValue('')
    // });
    this.formulario.get('estado')?.disable();
    this.formulario.get('ciudad')?.disable();
    this.formulario.get('pais')?.valueChanges
    .subscribe((pais) => {this.paisSeleccionado = pais; this.formulario.get('estado')?.enable(), this.formulario.get('ciudad')?.disable();});

    this.formulario.get('estado')?.valueChanges
    .subscribe((estado) => {this.estadoSeleccionado = estado; this.formulario.get('ciudad')?.enable()});
  }

  obtenerEstadosPorPais(pais:string):string[]{
    return [`Estado1 de: ${pais}`,`Estado2 de: ${pais}`,`Estado3 de: ${pais}`]
  }

  obtenerCiudadesPorEstado(estado:string){
    return [`Ciudad1 de: ${estado}`,`Ciudad2 de: ${estado}`,`Ciudad3 de: ${estado}`]
  }

  enviarFormulario(){
    console.log('Formulario enviado: ', this.formulario.value);
    this.formulario.reset();
    this.formulario.get('estado')?.disable();
    this.formulario.get('ciudad')?.disable();
    this.paisSeleccionado = '';
    this.estadoSeleccionado = '';
  }
}
  //gestion de pasos: gestion de como los usuarios ingresan los datos
