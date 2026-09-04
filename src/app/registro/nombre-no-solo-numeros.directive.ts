import { Directive, forwardRef } from '@angular/core'
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator
} from '@angular/forms'

@Directive({
  selector: '[nombreNoSoloNumeros]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NombreNoSoloNumerosDirective),
      multi: true
    }
  ]
})
export class NombreNoSoloNumerosDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    const valor = String(control.value ?? '').trim()

    if (valor !== '' && /^\d+$/.test(valor)) {
      return {
        soloNumeros: true
      }
    }

    return null
  }
}