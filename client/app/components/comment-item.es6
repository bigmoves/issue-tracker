export default Ember.Component.extend({
  classNames: 'comment',
  isEditing: false,
  canDelete: true,

  isOwner: function() {
    return Ember.isEqual(this.get('targetObject.currentUser'), this.get('content.user'));
  }.property(),

  updatedBody: function() {
    return Ember.copy(this.get('content.body'));
  }.property(),

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    cancel: function()  {
      this.set('isEditing', false);
      this.set('updatedBody', Ember.copy(this.get('content.body')));
    },
    update: function(content) {
      content.set('body', this.get('updatedBody'));
      this.sendAction('update', content);
      this.send('cancel');
    },
    delete: function(comment) {
      if(confirm('Are you sure you want to delete this?')) {
        this.sendAction('delete', comment);
      }
    }
  }
});
