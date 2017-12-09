import {
  // validatePresence,
  // validateLength,
  // validateConfirmation,
  // validateFormat,
  // validateNumber,
  // validateInclusion,
  // validateExclusion,
} from 'ember-changeset-validations/validators';

import EmailValidations from './email';
import PasswordValidations from './password';
// import PasswordConfirmationValidations from './password-confirmation';

var { email } = EmailValidations;
var { password } = PasswordValidations;
// var { passwordConfirmation } = PasswordConfirmationValidations;

export default { email, password };




