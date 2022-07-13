class User < ActiveRecord::Base
    has_one :ghost
    has_many :houses
end