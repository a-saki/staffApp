class Division < ApplicationRecord
  include CsvExportable
  has_many :staff, dependent: :destroy
end
