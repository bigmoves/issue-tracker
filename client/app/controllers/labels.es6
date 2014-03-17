export default Ember.ArrayController.extend({
  name: '',
  color: '',

  btnEnabled: Em.computed.notEmpty('name'),

  resetForm: function() {
    this.set('name', '');
    this.set('color', '');
  },

  actions: {
    addLabel: function() {
      var label = this.store.createRecord('label', {
        name: this.get('name'),
        color: this.get('color')
      });
      label.save();
      this.resetForm();
    }
  }
});
