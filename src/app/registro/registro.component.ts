import { Component } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'
import { isAndroid } from '@nativescript/core'
import { RegistroService } from './registro.service'

@Component({
  selector: 'ns-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
  // providers: [RegistroService]
})
export class RegistroComponent {

  elementos: any[]
  plataforma: string = ''

  constructor(
    private routerExtensions: RouterExtensions,
    private registroService: RegistroService
  ) {
    this.elementos = this.registroService.obtenerDatos()

    if (isAndroid) {
      this.plataforma = 'La aplicación se está ejecutando en Android'
    }
  }

  irADetalle(): void {
    this.routerExtensions.navigate(['/registro/detalle'])
  }
}