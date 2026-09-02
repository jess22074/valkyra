import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'ns-detalle-item',
  templateUrl: './detalle-item.component.html'
})
export class DetalleItemComponent implements OnInit {

  id: number = 0

  recursos = [
  {
    titulo: 'Introducción',
    descripcion: 'Conceptos básicos para comenzar',
    nivel: 'Nivel básico'
  },
  {
    titulo: 'Conceptos principales',
    descripcion: 'Contenido fundamental del tema',
    nivel: 'Nivel intermedio'
  },
  {
    titulo: 'Práctica',
    descripcion: 'Ejercicios para reforzar lo aprendido',
    nivel: 'Nivel práctico'
  }
]

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.params['id'])
    
  }

  actualizarRecursos(): void {

  const nuevosRecursos = [
    {
      titulo: 'Buenas prácticas',
      descripcion: 'Recomendaciones para mejorar el aprendizaje',
      nivel: 'Nivel recomendado'
    },
    {
      titulo: 'Proyecto guiado',
      descripcion: 'Actividad para aplicar los conocimientos',
      nivel: 'Nivel práctico'
    },
    {
      titulo: 'Conceptos avanzados',
      descripcion: 'Temas para profundizar en el contenido',
      nivel: 'Nivel avanzado'
    },
    {
      titulo: 'Ejercicio adicional',
      descripcion: 'Nuevo ejercicio para practicar',
      nivel: 'Nivel intermedio'
    }
  ]

  const indiceAleatorio = Math.floor(
    Math.random() * nuevosRecursos.length
  )

  this.recursos.push(nuevosRecursos[indiceAleatorio])

  this.recursos = [...this.recursos]
}

onPullToRefresh(args: any): void {
  const listView = args.object

  this.actualizarRecursos()

  setTimeout(() => {
    listView.notifyPullToRefreshFinished()
  }, 500)
}
}