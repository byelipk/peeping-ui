import {
  validatePresence,
  validateLength,
} from 'ember-changeset-validations/validators';

var PasswordValidations = {
  password: [
    validatePresence(true),
    validateLength({ min: 8 })
  ]
};

export default PasswordValidations;