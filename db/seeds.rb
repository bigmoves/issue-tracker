# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = User.create([
  {
    name: 'Chad Miller',
    username: 'chadtmiller',
    email: 'chadtmiller15@gmail.com'
  }, {
    name: 'Yehuda Katz',
    username: 'wycats',
    email: 'wycats@gmail.com'
  }
])

labels = Label.create([
  {name: 'bug', color: 'fc2929'},
  {name: 'duplicate', color: 'cccccc'},
  {name: 'enhancement', color: '84b6eb'},
  {name: 'invalid', color: 'e6e6e6'},
  {name: 'question', color: 'cc317c'},
  {name: 'wontfix', color: 'ffffff'}
])

Issue.create({
  title: 'Ember is awesome!',
  body: 'yessir',
  state: 'open',
  user: users.first,
  labels: [labels.first]
}).tap do |issue|

  issue.comments.create(body: 'hey, there', user: users.last)

  issue.comments.create(body: "what's up", user: users.first)

end
