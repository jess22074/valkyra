import { Injectable } from '@angular/core'

@Injectable()
export class RegistroService {

  obtenerDatos() {
    return [
      { nombre: 'Elemento 1' },
      { nombre: 'Elemento 2' },
      { nombre: 'Elemento 3' }
    ]
  }
}