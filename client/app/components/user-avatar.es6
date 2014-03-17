export default Ember.Component.extend({
  avatarUrl: function() {
    var username = this.get('username');
    return 'http://avatars.io/twitter/' + username;
  }.property('email'),

  didInsertElement: function() {
    this.$('.avatar').tooltip();
  }
});
