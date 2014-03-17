export default Ember.ObjectController.extend({
  needs: ['application', 'labels'],
  currentUser: Em.computed.alias('controllers.application.model'),

  labels: Em.computed.alias('controllers.labels.content'),

  selectedLabels: [],

  actions: {

  }

});
