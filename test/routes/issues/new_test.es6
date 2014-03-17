import IssuesNewRoute from 'client/app/routes/issues/new';

var route, store;

module('Unit - IssuesNewRoute', {
  setup: function(){
    store = {};

    route = IssuesNewRoute.create({
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
