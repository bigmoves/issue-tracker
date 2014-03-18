export default Ember.Component.extend({
  participants: function() {
    var owner = this.get('owner');
    return this.get('data').getEach('user').uniq().removeObject(owner);
  }.property('data.@each.user'),

  total: function() {
    return this.get('participants').length + 1;
  }.property('participants')
});
