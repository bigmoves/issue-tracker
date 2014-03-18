export default Ember.Component.extend({
  highlightCode: function() {
    $('pre code').each(function(i, e) {hljs.highlightBlock(e)});
  }.on('didInsertElement')
});
