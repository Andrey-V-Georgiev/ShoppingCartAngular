import {AbstractControl, FormArray, ValidationErrors, ValidatorFn} from '@angular/forms';
import Constants from '../constants/constants';
import {FormGroup} from '@angular/forms';

const emailValidator = (control: AbstractControl): ValidationErrors | null => {
    const emailInput: string = control.value;
    const isValid: boolean = emailInput.match(Constants.EMAIL_REGEX_PATTERN) != null;
    return isValid ? null : {emailValidation: true};
}

const priceValidator = (control: AbstractControl): ValidationErrors | null => {
    const priceInput: string = control.value;
    const isValid: boolean = /^[0-9]+(\.[0-9]{1,2})?$/.test(priceInput);
    return isValid ? null : {priceValidation: true};
}

const confirmPasswordValidator = (control: AbstractControl): ValidationErrors | null => {
    const formGroup: FormGroup | FormArray | null = control.parent;
    const passwordInput: string = formGroup?.get("password")?.value;
    const confirmPasswordInput: string = formGroup?.get("confirmPassword")?.value;
    const match: boolean = passwordInput == confirmPasswordInput;
    return match ? null : {confirmPasswordValidation: true};
}

export {emailValidator, confirmPasswordValidator, priceValidator}
