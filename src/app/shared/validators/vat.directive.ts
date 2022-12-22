import { Directive} from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appVatValidator]',
  providers:[
    {
      provide: NG_VALIDATORS,
      useExisting: VATDirective,
      multi: true
    }
  ]
})
export class VATDirective implements Validator{

  // @Input('appVat') VatNum: string | undefined;
constructor(){}
 
  validate(control: AbstractControl): ValidationErrors | null {
  
      const re=/BG\d{9}$/g;
      var flag=re.test(control.value);
         if(flag==true) {return null}
        
    return { vatNum: true}
    
  }





}
