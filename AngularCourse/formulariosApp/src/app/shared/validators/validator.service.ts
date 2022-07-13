import { Injectable } from '@angular/core';
import { FormControl, AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  constructor() {}

  noPuedeSerStrider(control: FormControl) {
    const valor = control.value?.trim().toLowerCase();
    if (valor === 'strider') {
      return {
        noStrider: true,
      };
    }
    return null;
  }

  camposIguales(campo1: string, campo2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if(pass1 !== pass2) {
        formGroup.get(campo2)?.setErrors({noIguales:true})
        return {noIguales:true}
      }else{
        formGroup.get(campo2)?.setErrors(null)
      }
      
      return null;
    };
  }
}
