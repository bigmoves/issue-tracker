class Issue < ActiveRecord::Base
  belongs_to :user
  belongs_to :assignee
  has_many :comments
  has_and_belongs_to_many :labels
end
