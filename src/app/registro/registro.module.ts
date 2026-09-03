import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, } from '@nativescript/angular'
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import { NativeScriptFormsModule } from '@nativescript/angular'
import { RegistroComponent } from './registro.component'
import { DetalleComponent } from './detalle.component'
import { ListadoComponent } from './listado.component'
import { DetalleItemComponent } from './detalle-item.component'
import { EditarItemComponent } from './editar-item.component'
import { RegistroRoutingModule } from './registro-routing.module'


@NgModule({
  imports: [
    NativeScriptCommonModule,
    RegistroRoutingModule,
    NativeScriptUIListViewModule,
    NativeScriptFormsModule
  ],

  declarations: [
  RegistroComponent,
  DetalleComponent,
  ListadoComponent,
  DetalleItemComponent,
  EditarItemComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class RegistroModule {}