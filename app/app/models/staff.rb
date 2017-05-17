class Staff < ApplicationRecord
  belongs_to :jobcategory
  belongs_to :division
end
