import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { inject as service } from '@ember/service';

export default Route.extend(ApplicationRouteMixin, {
  notify: service(),

  afterModel() {
    this._super(...arguments);

    this.get('notify').displayLogoutSuccess();
  },

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  },
});
