class Ghost < ActiveRecord::Base
    belongs_to :user
    has_many :hauntings
    has_many :houses, through: :hauntings
end