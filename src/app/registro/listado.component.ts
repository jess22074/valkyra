import { Component } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'
import { RegistroService } from './registro.service'
import { Color, action } from '@nativescript/core'

@Component({
  selector: 'ns-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  elementos: any[] = []

  textoBusqueda: string = ''

  resultadosBusqueda = [...this.elementos]

  constructor(
  private routerExtensions: RouterExtensions,
  private registroService: RegistroService
) {
  this.elementos = this.registroService.obtenerDatos()
  this.resultadosBusqueda = [...this.elementos]
}  

  buscar(): void {
  const texto = this.textoBusqueda.toLowerCase().trim()

  if (texto === '') {
    this.resultadosBusqueda = [...this.elementos]
  } else {
    this.resultadosBusqueda = this.elementos.filter(elemento =>
      elemento.nombre.toLowerCase().includes(texto)
    )
  }
}

limpiarBusqueda(): void {
  setTimeout(() => {
    this.textoBusqueda = ''
    this.resultadosBusqueda = [...this.elementos]
  }, 0)
}
  onItemTap(args: any): void {
    const elemento = this.resultadosBusqueda[args.index]

    this.routerExtensions.navigate([
      '/registro/detalle-item',
      elemento.id
    ])
  }

  editarElemento(id: number): void {
  this.routerExtensions.navigate([
    '/registro/editar-item',
    id
  ])
}

onLongPress(args: any, elemento: any): void {
  const boton = args.object

  boton.animate({
    backgroundColor: new Color('#DDEBFF'),
    duration: 300
  }).then(() => {
    return boton.animate({
      backgroundColor: new Color('#FFFFFF'),
      duration: 300
    })
  }).then(() => {
  return action({
    message: '¿Qué deseas hacer con este elemento?',
    cancelButtonText: 'Cancelar',
    actions: ['Borrar', 'Archivar']
  })
})
.then((resultado) => {
  if (resultado === 'Borrar') {
    this.registroService.borrarElemento(elemento.id)
  } else if (resultado === 'Archivar') {
    this.registroService.archivarElemento(elemento.id)
  }

  this.elementos = this.registroService.obtenerDatos()
  this.resultadosBusqueda = [...this.elementos]
})

  console.log('Long press detectado:', elemento.nombre)
}

}