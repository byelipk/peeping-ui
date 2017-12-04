import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('register-card', 'Integration | Component | register card', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.on('onsubmit', function() {})

  this.render(hbs`{{register-card onsubmit=onsubmit}}`);

  assert.equal(this.$('.card-title').length, 1, 'Expected a card title');
  // assert.equal(this.$('button').length, 1, 'Expected a button');

  assert.equal(this.$('.card-title').text().trim(), 'Register with Peeping', 'Expected different card title');
  // assert.equal(this.$('button').text().trim(), 'Register', 'Expected different button text');
});
