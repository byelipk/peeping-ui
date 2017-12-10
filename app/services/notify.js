import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  flashMessages: service(),
  fastboot: service(),

  isFastBoot: computed('fastboot.isFastBoot', function computed() {
    return this.get('fastboot.isFastBoot');
  }),

  setSessionInvalidationToken() {
    if (!this.get('isFastBoot') && localStorage) {
      localStorage.setItem('session-invalidated', 1);
    }
  },

  displayLogoutSuccess() {
    if (!this.get('isFastBoot') && localStorage) {
      if (Number(localStorage.getItem('session-invalidated')) === 1) {
        this.get('flashMessages').success("You've logged out successfully! 👌");
        localStorage.removeItem('session-invalidated');
      }
    } 
  }
});
