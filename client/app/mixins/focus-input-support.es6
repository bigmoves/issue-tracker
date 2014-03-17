export default Ember.Mixin.create({
  becomeFocused: function() {
    this.$().focus();
  }.on('didInsertElement')
});
