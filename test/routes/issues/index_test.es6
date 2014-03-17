import IssuesIndexRoute from 'client/app/routes/issues/index';

var route, store;

module('Unit - IssuesIndexRoute', {
  setup: function(){
    store = {};

    route = IssuesIndexRoute.create({
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
