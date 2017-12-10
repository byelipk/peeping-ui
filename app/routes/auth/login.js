import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),
  notify: service(),

  actions: {
    doLogin(changeset) {
      var session = get(this, 'session');

      changeset.validate()
        .then(function validated() {
          if (get(changeset, 'isValid')) {
            return session.authenticate(
              'authenticator:peeping', 
              changeset.get('email'), 
              changeset.get('password')
            );
          }
        })
        .catch(() => {
          this.get('notify').displayLoginFailure();
          changeset.rollback();
        });
    }
  },

  model() {
    return {
      email: '',
      password: ''
    };
  }
});
