class Trip < ActiveRecord::Base
  belongs_to :user
  validates :current_location, presence: true
  validates :destination, presence: true
end
