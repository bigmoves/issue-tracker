export default Ember.Component.extend({
  classNames: 'comment-form',
  errors: null,
  activeTab: 'isWrite',
  isWrite: Em.computed.equal('activeTab', 'isWrite'),
  isPreview: Em.computed.equal('activeTab', 'isPreview'),
  isOpen: Em.computed.equal('content.state', 'open'),
  body: '',

  actions: {
    comment: function() {
      this.sendAction('comment', this.get('body'));
      this.set('body', '');
    },

    close: function() {
      this.sendAction('close');
    },

    reopen: function() {
      this.sendAction('reopen');
    },

    activateTab: function(tab) {
      this.set('activeTab', tab);
    }
  },

  _hightlightCode: function() {
    if(this.get('isPreview')) {
      setTimeout(function() {
          $('pre code').each(function(i, e) {hljs.highlightBlock(e)});
      }, 200);
    }
  }.observes('isPreview')
});
