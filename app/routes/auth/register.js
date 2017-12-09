import Route from '@ember/routing/route';
import { isEmpty} from '@ember/utils';
import { get } from '@ember/object';

export default Route.extend({
  actions: {
    doRegister(changeset) {
      changeset.validate()
      .then(function validated() {
        if (isEmpty(get(changeset, 'errors'))) {
          // Save to server...
        }
      });
    }
  },

  model() {
    return this.store.createRecord('user');
  }
});
