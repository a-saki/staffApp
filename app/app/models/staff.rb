class Staff < ApplicationRecord
  has_secure_password
  belongs_to :jobcategory
  belongs_to :division
  
  before_save { self.email = self.email.downcase}
  before_save {
    if self.facebook.presence
       self.facebook = self.facebook.downcase
    end
    if self.twitter.presence
       self.twitter = self.twitter.downcase
    end
    if self.slack.presence
       self.slack = self.slack.downcase
    end
  }

  validates :name, presence: true, length: { maximum: 50 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
end