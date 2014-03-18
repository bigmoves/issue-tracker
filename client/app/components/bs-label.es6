export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['label'],
  attributeBindings: ['style'],
  style: function() {
    return 'background-color:#%@'.fmt(this.get('color'));
  }.property()
});
