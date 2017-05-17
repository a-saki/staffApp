class Jobcategory < ApplicationRecord
  has_many :staff, dependent: :destroy
end
