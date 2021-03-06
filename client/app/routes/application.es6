export default Ember.Route.extend({
  model: function() {
    return this.store.find('user', 1);
  },

  setupController: function(controller, model) {
    var _this = this, labels;
    this._super(controller, model);

    labels = this.store.find('label');
    labels.then(function(data) {
      _this.controllerFor('labels').set('content', data);
    });
  }
});
