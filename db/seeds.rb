# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create(email: "mike@example.com", phone: "(908)3707882", password: "password", password_confirmation: "password")
User.create(email: "logan@example.com", phone: "(222)2222222", password: "password", password_confirmation: "password")
User.create(email: "francois@example.com", phone: "(333)3333333", password: "password", password_confirmation: "password")
