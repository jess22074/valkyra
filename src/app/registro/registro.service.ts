import { Injectable } from '@angular/core'

@Injectable()
export class RegistroService {

  elementos = [
    {
      id: 1,
      nombre: 'Desarrollo móvil',
      imagen: '~/assets/imagen1.png'
    },
    {
      id: 2,
      nombre: 'Programacion',
      imagen: '~/assets/imagen2.png'
    },
    {
      id: 3,
      nombre: 'Base de datos',
      imagen: '~/assets/imagen3.png'
    }
  ]

  obtenerDatos() {
    return this.elementos
  }

  actualizarNombre(id: number, nuevoNombre: string): void {
  const elemento = this.elementos.find(item => item.id === id)

  if (elemento) {
    elemento.nombre = nuevoNombre
  }
}

}