export default Ember.Route.extend({
  model: function() {
    return this.store.find('user', 1);
  },

  setupController: function(controller, model) {
    var _this = this;
    controller.set('model', model);
    var labels = this.store.find('label');
    labels.then(function(data) {
      _this.controllerFor('labels').set('content', data);
    });
  }
});
