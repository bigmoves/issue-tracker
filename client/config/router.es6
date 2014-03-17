var Router = Ember.Router.extend({
  // Uncomment to change Ember's router to use the
  // HTML5 History API
  // Please note that not all browsers support this!
  // You will also need to uncomment the greedy route matcher
  // in config/routes.rb

  location: 'history'
});

Router.map(function() {
  this.resource('issues', function() {
    this.route('new');
    this.route('show', {path: ':issue_id'});
    this.route('edit', {path: ':issue_id/edit'});
  });
  this.resource('users', function() {
    this.route('new');
    this.route('show', {path: ':user_id'});
    this.route('edit', {path: ':user_id/edit'});
  });
});

export default Router;
