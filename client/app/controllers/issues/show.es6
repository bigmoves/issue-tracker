export default Ember.ObjectController.extend({
  needs: ['application'],
  currentUser: Em.computed.alias('controllers.application.model'),

  isEditing: false,
  isOpen: Em.computed.equal('content.state', 'open'),

  newTitle: function() {
    return Ember.copy(this.get('content.title'));
  }.property(),

  actions: {
    edit: function() {
      this.toggleProperty('isEditing');
    },
    reset: function() {
      this.set('isEditing', false);
      this.set('newTitle', Ember.copy(this.get('content.title')));
    },
    updateTitle: function() {
      var issue = this.get('content');
      var title = this.get('newTitle');
      issue.set('title', title);
      issue.save();
      this.send('reset');
    },
    addComment: function(body) {
      var issue = this.get('content');
      var user = this.get('currentUser');

      var comment = this.store.createRecord('comment', {
        body: body,
        user: this.get('currentUser'),
        issue: issue
      });

      comment.save().then(function(comment) {
        issue.get('comments').pushObject(comment);
      });

    },
    deleteComment: function(comment) {
      //http://stackoverflow.com/questions/18806533/deleterecord-does-not-remove-record-from-hasmany
      comment.eachRelationship(function(name, relationship){
        if (relationship.kind === "belongsTo") {
          var inverse = relationship.parentType.inverseFor(name);
          var parent  = comment.get(name);
          if (inverse && parent) parent.get(inverse.name).removeObject(comment);
        }
      });
      comment.deleteRecord();
      comment.save();
    },
    updateComment: function(comment) {
      comment.save();
    },
    closeIssue: function() {
      //TODO add event for this
      this.get('content').set('state', 'closed').save();
    },
    reopenIssue: function() {
      //TODO add event for this
      this.get('content').set('state', 'open').save();
    }
  }
});
