class Haunting < ActiveRecord::Base
    belongs_to :ghost
    belongs_to :house
end