import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['input-field'],
  type: 'text',

  _errorMessages: computed('errors.[]', function errorMessages() {
    return (this.get('errors') || []).join(', ');
  })
});
