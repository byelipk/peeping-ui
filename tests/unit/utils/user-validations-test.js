import userValidations from 'peepchat/validations/user';
import { module, test } from 'qunit';

module('Unit | Utility | user validations');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.ok(userValidations.hasOwnProperty('email'));
  assert.ok(userValidations.hasOwnProperty('password'));
  assert.ok(userValidations.hasOwnProperty('passwordConfirmation'));
});
