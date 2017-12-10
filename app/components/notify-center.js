import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from "@ember/object";

export default Component.extend({
  classNames: ['notification-center'],
  flashMessages: service(),
  reversedQueue: computed('flashMessages.arrangedQueue.[]', function computed() {
    return this.get('flashMessages.arrangedQueue').reverse();
  })
});

