import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export const customNumberValidator: ValidatorFn = (control: AbstractControl):
  ValidationErrors | null => {
    const duration = control.get('duration');

    return duration.value === 0 ? { invalidNumber: true } : null;
  }

@Directive({
  selector: '[appCustomNumberValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CustomNumberValidatorDirective, multi: true }]
})
export class CustomNumberValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    return customNumberValidator(control);
  }
}
