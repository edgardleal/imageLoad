(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#imageLoad', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#dummy').imageLoad();
      this.element = this.elems;
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.imageLoad(), this.elems, 'should be chainable');
  });

  test('Check setup', function() {
    expect(2);
    ok(this.element.hasClass('imageLoad'), 'Has class imageLoad');
    ok($.fn.imageLoad, 'Instaled');
  });

  module(':awesome selector', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#dummy');
    }
  });

  test('is imageLoad', function() {
    expect(1);
    // Use deepEqual & .get() when comparing jQuery objects.
    deepEqual(this.elems.filter(':imageLoad').get(), this.elems.get(), 'imageLoad selector');
  });

}(jQuery));
