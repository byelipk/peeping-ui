import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),

  beforeModel() {
    if (this.get('session').get('isAuthenticated')) {
      this.transitionTo('app.index');
    }
  }
});
