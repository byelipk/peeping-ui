import {
  validatePresence,
  validateFormat
} from 'ember-changeset-validations/validators';

var EmailValidations = {
  email: [
    validatePresence(true),
    validateFormat({ type: 'email' })
  ]
};

export default EmailValidations;