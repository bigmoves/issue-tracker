class UserSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :name, :email, :username

  has_many :issues
end
