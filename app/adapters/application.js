import DS from 'ember-data';
import config from '../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import AdapterFetch from 'ember-fetch/mixins/adapter-fetch';

export default DS.JSONAPIAdapter.extend(
  DataAdapterMixin,
  AdapterFetch, {

  host: config.DS.host,
  namespace: config.DS.namespace,
  authorizer: 'authorizer:oauth2',

  urlForCreateRecord(modelName, /* snapshot */) {
    switch(modelName) {
      case 'user':
      case 'users':
        return this._super.apply(this, arguments).replace('users', 'register');
      default:
        return this._super(...arguments);
    }
  }
});
