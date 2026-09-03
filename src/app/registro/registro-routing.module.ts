import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { RegistroComponent } from './registro.component'
import { DetalleComponent } from './detalle.component'
import { ListadoComponent } from './listado.component'
import { DetalleItemComponent } from './detalle-item.component'
import { EditarItemComponent } from './editar-item.component'

const routes: Routes = [
  { path: '', component: RegistroComponent },
  { path: 'detalle', component: DetalleComponent },
  { path: 'listado', component: ListadoComponent },
  { path: 'detalle-item/:id', component: DetalleItemComponent },
  { path: 'editar-item/:id', component: EditarItemComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class RegistroRoutingModule {}
