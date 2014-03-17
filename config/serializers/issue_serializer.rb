class IssueSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :title, :body, :state, :user_id, :assignee_id, :created_at, :updated_at

  has_many :comments
  has_many :labels
end
