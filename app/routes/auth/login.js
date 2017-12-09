import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),

  actions: {
    doLogin(changeset) {
      var session = get(this, 'session');

      changeset.validate()
        .then(function validated() {
          if (get(changeset, 'isValid')) {
            session.authenticate(
              'authenticator:peeping', 
              changeset.get('email'), 
              changeset.get('password')
            );
          }
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
