import { Directive} from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPhone]',
  providers:[
    {
      provide: NG_VALIDATORS,
      useExisting: PhoneValidatorDirective,
      multi: true
    }
  ]
})
export class PhoneValidatorDirective implements Validator{

  
constructor(){}
 
  validate(control: AbstractControl): ValidationErrors | null {
  
      const re=/(\+359)?0?\s?8\d{1}\s?\d{3}\s?\d{4}/gm;
      var flag=re.test(control.value);
         if(flag==true) {return null}
        
    return { phone: true}
    
  }

}