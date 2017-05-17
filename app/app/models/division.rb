class Division < ApplicationRecord
  has_many :staff, dependent: :destroy
end
