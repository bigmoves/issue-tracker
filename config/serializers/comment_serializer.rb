class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :user_id, :issue_id
end
