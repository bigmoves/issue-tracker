var User = DS.Model.extend({
  name: DS.attr('string'),
  username: DS.attr('string'),
  email: DS.attr('string'),
  issues: DS.hasMany('issue', {async: true})
});

User.FIXTURES = [
  {
    id: 1,
    name: 'Tom Dale',
    username: 'tomdale',
    email: 'tom@ember.com',
    issues: [1,3]
  }, {
    id: 2,
    name: 'Yehuda Katz',
    username: 'wycats',
    email: 'khuda@ember.com',
    issues: [2,4]
  }
];

export default User;
