import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import fetch from 'fetch';
import config from '../config/environment';

export default Route.extend({
  session: service(),

  beforeModel() {
    if(!this.get('session').get('isAuthenticated')) {
      this.transitionTo('auth.login');
    }
  },

  afterModel() {
    const accessToken = `${this.get('session').get('session.content.authenticated.access_token')}`;
    const CURRENT_USER_ENDPOINT = `${config.DS.host}/${config.DS.namespace}/user/current`;

    return fetch(CURRENT_USER_ENDPOINT, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      var currentUser = this.store.push(data);
      this.set('session.currentUser', currentUser);
    })
    .catch(error => {
      console.error(error.message)
    });
  }
});
