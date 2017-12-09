import Component from '@ember/component';
import LoginValidations from '../validations/login';
import lookupValidator from 'ember-changeset-validations';
import Changeset from 'ember-changeset';

export default Component.extend({
  init() {
    this._super(...arguments);

    this.changeset = new Changeset(
      this.get('model'), 
      lookupValidator(LoginValidations),
      LoginValidations
    );
  },

  actions: {
    onsubmit() {
      this.attrs.onsubmit(this.get('changeset'));
    }
  }

});
