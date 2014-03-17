class IssueSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :title, :body, :state, :user_id, :assignee_id

  has_many :comments
  has_many :labels
end
