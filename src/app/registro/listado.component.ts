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

  constructor(private routerExtensions: RouterExtensions) {}

  onItemTap(args: any): void {
    const elemento = this.elementos[args.index]

    this.routerExtensions.navigate([
      '/registro/detalle-item',
      elemento.id
    ])
  }
}