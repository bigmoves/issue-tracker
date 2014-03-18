class CreateLabelships < ActiveRecord::Migration
  def change
    create_table :labelships do |t|
      t.integer :issue_id
      t.integer :label_id

      t.timestamps
    end
  end
end
