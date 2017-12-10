import Route from '@ember/routing/route';
import { isEmpty} from '@ember/utils';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
  notify: service(),

  actions: {
    doRegister(changeset) {
      changeset.validate()
        .then(() => {
          if (isEmpty(get(changeset, 'errors'))) {
            changeset
              .save()
              .then(() => {
                this.get('notify').displayRegistrationSuccess();
                this.transitionTo('auth.login') 
              })
              .catch(() => {
                changeset.rollback();
                this.get('notify').displayRegistrationFailure();
                get(this, 'currentModel.errors').forEach(({ attribute, message }) => {
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
