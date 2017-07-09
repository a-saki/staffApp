class Jobcategory < ApplicationRecord
  include CsvExportable
  has_many :staff, dependent: :destroy
  has_many :staff_relationship, class_name: "Relationship", foreign_key: "jobcategory_id", dependent: :destroy
  has_many :relation_staffs, through: :staff_relationship, source: :staff_id
  

end
