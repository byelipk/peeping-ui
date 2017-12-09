import {
  validateConfirmation,
} from 'ember-changeset-validations/validators';

var PasswordConfirmationValidations = {
  passwordConfirmation: validateConfirmation({ on: 'password' })
};

export default PasswordConfirmationValidations;