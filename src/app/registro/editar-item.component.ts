import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { RegistroService } from './registro.service'

@Component({
  selector: 'ns-editar-item',
  templateUrl: './editar-item.component.html'
})
export class EditarItemComponent {

id: number = 0
nombre: string = ''
nombreSoloNumeros: boolean = false

constructor(
  private route: ActivatedRoute,
  private registroService: RegistroService
) {
   this.id = Number(this.route.snapshot.params['id'])
   const elemento = this.registroService
    .obtenerDatos()
    .find(item => item.id === this.id)

    if (elemento) {
        this.nombre = elemento.nombre
}
}

validarNombre(): void {
  this.nombreSoloNumeros = /^\d+$/.test(this.nombre.trim())
}

guardar(): void {
  this.registroService.actualizarNombre(this.id, this.nombre)
  console.log('Nombre guardado:', this.nombre)
}

}