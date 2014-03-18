class Issue < ActiveRecord::Base
  belongs_to :user
  belongs_to :assignee
  has_many :comments
  has_many :labelships
  has_many :labels, :through => :labelships
end
