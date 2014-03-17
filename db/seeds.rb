# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Issue.create({
  title: 'Ember is awesome!',
  body: 'yessir'
}).tap do |issue|

  issue.comments.create(body: 'hey, there')

end
