import Route from '@ember/routing/route';
import { isEmpty} from '@ember/utils';
import { get } from '@ember/object';

export default Route.extend({
  actions: {
    doRegister(changeset) {
      changeset.validate()
        .then(() => {
          if (isEmpty(get(changeset, 'errors'))) {
            changeset
              .save()
              .then(() => this.transitionTo('auth.login') )
              .catch(() => {
                changeset.rollback();
                get(this, 'model.errors').forEach(({ attribute, message }) => {
                  changeset.pushErrors(attribute, message);
                });
              });
          }
        })
    }
  },

  model() {
    return this.store.createRecord('user');
  }
});
