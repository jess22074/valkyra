import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, } from '@nativescript/angular'

import { RegistroComponent } from './registro.component'
import { DetalleComponent } from './detalle.component'
import { RegistroRoutingModule } from './registro-routing.module'


@NgModule({
  imports: [NativeScriptCommonModule, RegistroRoutingModule],
  declarations: [RegistroComponent, DetalleComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class RegistroModule {}