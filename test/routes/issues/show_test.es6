import IssuesShowRoute from 'client/app/routes/issues/show';

var route, store;

module('Unit - IssuesShowRoute', {
  setup: function(){
    store = {};

    route = IssuesShowRoute.create({
      store: store
    });
  },
  teardown: function(){
    Ember.run(route, 'destroy');
  }
});

test('it exist', function(){
  expect(2);

  ok(route);
  ok(route instanceof Ember.Route);
});
