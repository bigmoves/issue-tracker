import UsersEditRoute from 'client/app/routes/users/edit';

var route, store;

module('Unit - UsersEditRoute', {
  setup: function(){
    store = {};

    route = UsersEditRoute.create({
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
