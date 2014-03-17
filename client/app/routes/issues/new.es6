export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('issue');
  },
  deactivate: function() {
    var model = this.get('controller.model');
    if (model.get('isNew')) {
      model.deleteRecord();
    }
    this.rollbackLabels();
  },
  //TODO clone label objects intstead of working with them directly
  rollbackLabels: function() {
    this.get('controller.selectedLabels').forEach(function(label) {
      return label.set('isSelected', false);
    });
    this.set('controller.selectedLabels', []);
  },
  actions: {
    createIssue: function(model) {
      var _this = this;
      var labels = this.get('controller.selectedLabels');

      model.set('user', this.get('controller.currentUser'));
      model.set('state', 'open');

      model.get('labels').then(function(label) {
        return label.pushObjects(labels);
      }).then(function() {
        return model.save();
      }).then(function() {
        _this.transitionTo('issues.show', model);
      });
    }
  }
});
