class Staff < ApplicationRecord
  attr_accessor :remember_token
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
  
  
  # class << self
    
    def Staff.new_token
      SecureRandom.urlsafe_base64
    end
    
    # 渡された文字列のハッシュ値を返す
    def self.digest(string)
      cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                    BCrypt::Engine.cost
      BCrypt::Password.create(string, cost: cost)
    end
  # end
    
  def remember
    self.remember_token = Staff.new_token
    update_attribute(:remember_digest, Staff.digest(remember_token))
  end
  
  # ユーザーのログイン情報を破棄する
  def forget
    update_attribute(:remember_digest, nil)
  end
  
  def authenticated?(remember_token)
    return false if remember_digest.nil?
    BCrypt::Password.new(remember_digest).is_password?(remember_token)
  end
 
end