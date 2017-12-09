import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    doRegister() {
      alert("HOLY GRAIL!")
    }
  },

  model() {
    return this.store.createRecord('user');
  }
});
