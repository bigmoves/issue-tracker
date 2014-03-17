export default Ember.Component.extend({
  classNames: 'issue-form',
  errors: null,
  activeTab: 'isWrite',
  isWrite: Em.computed.equal('activeTab', 'isWrite'),
  isPreview: Em.computed.equal('activeTab', 'isPreview'),
  canSubmitForm: Ember.computed.notEmpty('content.title'),
  actions: {
    submit: function(content) {
      var _this = this;
      return this.get('validator').validate(content).then(function(result) {
        if(result.valid) {
          return _this.sendAction('action', content);
        } else {
          _this.set('errors', result.errors);
        }
      });
    },

    activateTab: function(tab) {
      this.set('activeTab', tab);
    }
  },

  didInsertElement: function() {
    this.$('.title').focus();
    // sets the initial value so that the submit button is disabled
    // through the canSubmitForm property above
    this.set('content.title', '');
  },

  _hightlightCode: function() {
    if(this.get('isPreview')) {
      setTimeout(function() {
        $('pre code').each(function(i, e) {hljs.highlightBlock(e)});
      }, 200);
    }
  }.observes('isPreview'),

  validator: function() {
    return LGTM.validator()
      .validates('title')
        .required('You must enter a title.')
      .validates('body')
        .required('You must enter some content.')
      .build()
  }.property()
});
