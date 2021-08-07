import {AbstractControl, FormArray, ValidationErrors, ValidatorFn} from '@angular/forms';
import Constants from '../constants/constants';
import {FormGroup} from '@angular/forms';

const emailValidator = (control: AbstractControl): ValidationErrors | null => {
    /* Get the string from the input field */
    const emailInput: string = control.value;
    /* Check does it match the regex */
    const isValid: boolean = emailInput.match(Constants.EMAIL_REGEX_PATTERN) != null;
    /* Return error or null */
    return isValid ? null : {emailValidation: true};
}

const confirmPasswordValidator = (control: AbstractControl): ValidationErrors | null => {
    /* Get the group */
    const formGroup: FormGroup | FormArray | null = control.parent;
    /* Get the string from the password input field */
    const passwordInput: string = formGroup?.get("password")?.value;
    /* Get the string from the confirm password input field */
    const confirmPasswordInput: string = formGroup?.get("confirmPassword")?.value;
    /* Check do the fields match */
    const match: boolean = passwordInput == confirmPasswordInput;
    /* Return error or null */
    return match ? null : {confirmPasswordValidation: true};
}

export {emailValidator, confirmPasswordValidator}
