export default Ember.Component.extend({
  avatarUrl: function() {
    var email = this.get('data.email');
    return 'http://avatars.io/email/' + email;
  }.property('data.email'),

  didInsertElement: function() {
    var _this = this;
    setTimeout(function() {
      _this.$('.avatar').tooltip();
    }, 200);
  }
});
