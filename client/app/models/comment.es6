var Comment = DS.Model.extend({
  body: DS.attr('string'),
  user: DS.belongsTo('user'),
  issue: DS.belongsTo('issue'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});

Comment.FIXTURES = [
  {
    id: 1,
    body: 'what a dumb post',
    user: 2,
    createdAt: new Date()
  }, {
    id: 2,
    body: 'i liked it',
    user: 1,
    createdAt: new Date()
  }, {
    id: 3,
    body: '``` \n var foo = bar \n ```',
    user: 1,
    createdAt: new Date()
  }
];

export default Comment;
