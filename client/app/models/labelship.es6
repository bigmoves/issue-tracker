var Labelship = DS.Model.extend({
  issue: DS.belongsTo('issue'),
  label: DS.belongsTo('label'),
  relationshipsLoaded: function() {
    return this.get('issue.isLoaded') && this.get('label.isLoaded');
  }.property('issue.isLoaded', 'label.isLoaded')
});

export default Labelship;
