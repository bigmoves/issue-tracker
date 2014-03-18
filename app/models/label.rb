class Label < ActiveRecord::Base
  has_many :labelships
  has_many :issues, :through => :labelships
end
