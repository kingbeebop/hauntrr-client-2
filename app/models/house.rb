class House < ActiveRecord::Base
    belongs_to :user
    has_many :hauntings
    has_many :ghosts, through: :hauntings
end