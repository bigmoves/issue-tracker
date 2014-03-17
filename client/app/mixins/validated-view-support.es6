export default Ember.Mixin.create({
  invalidClass: 'input-is-invalid',
  classNameBindings: ['_isInvalid'],
  errors: [],
  _isInvalid: function () {
    return this.get("errors.length") ? this.get("invalidClass") : void 0
  }.property("errors")
});
