import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | item/total-per-month', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:item/total-per-month');
    assert.ok(controller);
  });
});
