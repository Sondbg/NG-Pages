import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VATDirective } from './validators/vat.directive';
import { PhoneValidatorDirective } from './validators/phone/phone.directive';
import { LoaderComponent } from './loader/loader/loader.component';
import { ShortPipe } from './short.pipe';





@NgModule({
  declarations: [
     VATDirective,
     PhoneValidatorDirective,
     LoaderComponent,
     ShortPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    VATDirective,
    PhoneValidatorDirective,
    LoaderComponent,
    ShortPipe,
  ]
})
export class SharedModule { }
