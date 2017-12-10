import Component from '@ember/component';
import { readOnly } from "@ember/object/computed";
import { next, cancel } from "@ember/runloop";

export default Component.extend({
  classNames: ['notification'],
  classNameBindings: ['active', 'exiting'],
  active: false,
  exiting: readOnly('flash.exiting'),

  didInsertElement() {
    this._super(...arguments);

    this._applyActiveClass = next(() => {
      this.set('active', true);
    });
  },

  willDestroyElement() {
    this._super(...arguments);

    // destroy message
    if (this.get('flash')) {
      this.get('flash').destroyMessage();
    }

    // cancel pending animations
    if (this._applyActiveClass) {
      cancel(this._applyActiveClass);
    }
  }
});
