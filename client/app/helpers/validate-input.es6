import ValidatedMixin from 'app/mixins/validated-view-support';

export default Ember.Handlebars.makeBoundHelper(function(view, options) {
  return Ember.Handlebars.helpers.view.call(this, view.extend(ValidatedMixin), options);
});
