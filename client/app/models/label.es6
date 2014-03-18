var Label = DS.Model.extend({
  name: DS.attr('string'),
  color: DS.attr('string'),
  labelships: DS.hasMany('labelship')
});

Label.FIXTURES = [
  {
    id: 1,
    name: 'Bug',
    color: '#000',
    issues: []
  }, {
    id: 2,
    name: 'Duplicate',
    color: '#000',
    issues: []
  }, {
    id: 3,
    name: 'Enhancement',
    color: '#000',
    issues: []
  }, {
    id: 4,
    name: 'Invalid',
    color: '#000',
    issues: []
  }, {
    id: 5,
    name: 'Question',
    color: '#000',
    issues: []
  }, {
    id: 6,
    name: 'Wontfix',
    color: '#000',
    issues: []
  }
];

export default Label;
