import { Component, ElementRef, ViewChild } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { RegistroService } from './registro.service'
import { Color } from '@nativescript/core'

@Component({
  selector: 'ns-editar-item',
  templateUrl: './editar-item.component.html'
})
export class EditarItemComponent {

    @ViewChild('tituloAnimado') tituloAnimado!: ElementRef    

    id: number = 0
    nombre: string = ''
  

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

animarColor(): void {
  const titulo = this.tituloAnimado.nativeElement

  titulo.animate({
    backgroundColor: new Color('#DDEBFF'),
    duration: 1000,
    delay: 500
  })
}

animarRotacion(): void {
  const titulo = this.tituloAnimado.nativeElement

  titulo.animate({
    rotate: 360,
    duration: 1000
  })
}

guardar(): void {
  this.registroService.actualizarNombre(this.id, this.nombre)
  console.log('Nombre guardado:', this.nombre)
}

}