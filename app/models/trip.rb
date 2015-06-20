class Trip < ActiveRecord::Base
  belongs_to :user
  validates_presence_of :current_location, :destination
end
