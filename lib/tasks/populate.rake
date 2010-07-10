namespace :db do
  
  desc "Erase and fill database"
  task :populate => :environment do
    require 'populator'
    require 'faker'
    
    [User].each(&:delete_all)
    
    User.populate 20 do |user|
      user.name = Populator.words(1..3).titleize
      user.email   = Faker::Internet.email
    end
  end
end
