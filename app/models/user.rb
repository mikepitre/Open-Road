class User < ActiveRecord::Base
  has_secure_password
  has_many :routes

  validates_presence_of :email, :phone_number, :password, :password_confirmation
  validates_uniqueness_of :email, :phone_number
end
