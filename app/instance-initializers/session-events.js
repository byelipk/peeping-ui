export function initialize(appInstance) {
  var notify = appInstance.lookup('service:notify');
  var session = appInstance.lookup('service:session');

  session.on('invalidationSucceeded', function() {
    notify.setSessionInvalidationToken();
  });
}

export default {
  initialize,
  name:  'session-events',
  after: 'ember-simple-auth'
};
