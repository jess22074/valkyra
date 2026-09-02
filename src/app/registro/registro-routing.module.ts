import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { RegistroComponent } from './registro.component'
import { DetalleComponent } from './detalle.component'

const routes: Routes = [
  { path: '', component: RegistroComponent },
  { path: 'detalle', component: DetalleComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class RegistroRoutingModule {}
