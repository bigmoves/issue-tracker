var Issue = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  state: DS.attr('string'),
  user: DS.belongsTo('user'),
  assignee: DS.belongsTo('user'),
  comments: DS.hasMany('comment', {async: true}),
  labels: DS.hasMany('label', {async: true}),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});

Issue.FIXTURES = [
  {
    id: 1,
    title: 'Issue with the website',
    body: "This link isn't working properly",
    state: 'open',
    user: 1,
    assignee: 2,
    comments: [1, 2, 3],
    labels: [1],
    createdAt: new Date(2014,2,1),
    updatedAt: new Date(2014,2,2)
  }, {
    id: 2,
    title: "What's wrong with the router?",
    body: 'I keep getting rejected promises.',
    state: 'open',
    user: 2,
    assignee: 1,
    comments: [],
    labels: [2],
    createdAt: new Date(2014,2,3),
    updatedAt: new Date(2014,2,4)
  }, {
    id: 3,
    title: "Something's wrong",
    body: 'I keep getting rejected promises.',
    state: 'open',
    user: 1,
    comments: [1],
    assignee: 2,
    labels: [],
    createdAt: new Date(2014,2,10),
    updatedAt: new Date(2014,2,11)
  }, {
    id: 4,
    title: "Major bug",
    body: 'I keep getting rejected promises.',
    state: 'open',
    user: 2,
    comments: [2],
    assignee: 1,
    labels: [],
    createdAt: new Date(2014,1,1),
    updatedAt: new Date(2014,2,1)
  }
];

export default Issue;
