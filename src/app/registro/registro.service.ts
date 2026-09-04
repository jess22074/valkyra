import { Injectable } from '@angular/core'

@Injectable()
export class RegistroService {

  elementos = [
    {
      id: 1,
      nombre: 'Desarrollo móvil',
      imagen: 'res://valkyra_recurso'
    },
    {
      id: 2,
      nombre: 'Programacion',
      imagen: 'https://art.nativescript.org/logo/export/NativeScript_Logo_Blue_White.png'
    },
    {
      id: 3,
      nombre: 'Base de datos',
      imagen: '~/assets/imagen3.png'
    }
  ]

  archivados: any[] = []

  obtenerDatos() {
    return this.elementos
  }

  actualizarNombre(id: number, nuevoNombre: string): void {
  const elemento = this.elementos.find(item => item.id === id)

  if (elemento) {
    elemento.nombre = nuevoNombre
  }
}

borrarElemento(id: number): void {
  this.elementos = this.elementos.filter(item => item.id !== id)
}

archivarElemento(id: number): void {
  const elemento = this.elementos.find(item => item.id === id)

  if (elemento) {
    this.archivados.push(elemento)
    this.elementos = this.elementos.filter(item => item.id !== id)
  }
}

}