class CreateIssues < ActiveRecord::Migration
  def change
    create_table :issues do |t|
      t.string :title
      t.string :body
      t.string :state
      t.belongs_to :user, index: true
      t.belongs_to :assignee, index: true

      t.timestamps
    end
  end
end
