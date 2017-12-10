import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Route.extend(ApplicationRouteMixin, {
  flashMessages: service(),
  fastboot: service(),
  isFastBoot: computed('fastboot.isFastBoot', function computed() {
    return this.get('fastboot.isFastBoot');
  }),

  afterModel() {
    this._super(...arguments);

    if (!this.get('isFastBoot') && localStorage) {
      if (Number(localStorage.getItem('session-invalidated')) === 1) {
        this.get('flashMessages').success("You've logged out successfully! 👌");
        localStorage.removeItem('session-invalidated');
      }
    } 
  },

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
