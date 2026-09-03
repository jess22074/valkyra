import { Component } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'

@Component({
  selector: 'ns-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  elementos = [
    {
      id: 1,
      nombre: 'Desarrollo móvil ',
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

  textoBusqueda: string = ''

  resultadosBusqueda = [...this.elementos]

  constructor(private routerExtensions: RouterExtensions) {}  

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
}