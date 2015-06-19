class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.string :current_location, null: false
      t.string :destination, null: false
      t.belongs_to :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
