class CreateWebsites < ActiveRecord::Migration[6.0]
  def change
    create_table :websites do |t|
      t.string :title
      t.string :link
      t.belongs_to :list, null: false, foreign_key: true

      t.timestamps
    end
  end
end
