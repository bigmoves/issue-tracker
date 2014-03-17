import FocusInputMixin from 'app/mixins/focus-input-support';

export default Ember.Handlebars.makeBoundHelper(function(view, options) {
  return Ember.Handlebars.helpers.view.call(this, view.extend(FocusInputMixin), options);
});
