export function initialize(appInstance) {
  var session = appInstance.lookup('service:session');
  var fastboot = appInstance.lookup('service:fastboot');

  session.on('invalidationSucceeded', function() {
    if (!fastboot.get('isFastBoot') && localStorage) {
      localStorage.setItem('session-invalidated', 1);
    }
  });
}

export default {
  initialize,
  name:  'session-events',
  after: 'ember-simple-auth'
};
