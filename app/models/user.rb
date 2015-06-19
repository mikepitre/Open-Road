class User < ActiveRecord::Base
  has_secure_password
  has_many :routes

  validates_presence_of :email, :phone, :password, :password_confirmation
  validates_uniqueness_of :email, :phone
end
