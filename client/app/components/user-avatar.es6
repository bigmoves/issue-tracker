export default Ember.Component.extend({
  avatarUrl: function() {
    var email = this.get('data.email');
    return 'http://avatars.io/email/' + email;
  }.property('email'),

  didInsertElement: function() {
    this.$('.avatar').tooltip();
  }
});
