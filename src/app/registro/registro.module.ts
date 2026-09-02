import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, } from '@nativescript/angular'

import { RegistroComponent } from './registro.component'
import { DetalleComponent } from './detalle.component'
import { ListadoComponent } from './listado.component'
import { DetalleItemComponent } from './detalle-item.component'
import { RegistroRoutingModule } from './registro-routing.module'
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';


@NgModule({
  imports: [
    NativeScriptCommonModule,
    RegistroRoutingModule,
    NativeScriptUIListViewModule
  ],

  declarations: [
  RegistroComponent,
  DetalleComponent,
  ListadoComponent,
  DetalleItemComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class RegistroModule {}