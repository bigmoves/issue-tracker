export default Ember.Component.extend({
  actions: {
    select: function(label) {
      var labels = this.get('selectedLabels');

      if(labels.contains(label)) {
        labels.removeObject(label);
        return label.set('isSelected', false);
      }

      this.get('selectedLabels').pushObject(label);
      label.set('isSelected', true);
    }
  }
});
