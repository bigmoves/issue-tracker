class CreateIssuesLabelsJoin < ActiveRecord::Migration
  def self.up
    create_table 'issues_labels', :id => false do |t|
      t.column :issue_id, :integer
      t.column :label_id, :integer
    end
  end

  def self.down
    drop_table 'issues_labels'
  end
end
