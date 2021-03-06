module StaffsHelper
  #SNSアイコン出力
  def snsIcon(model,sns)
    if !model.empty?
      @text = '<li><a href="' + model + '" target="_blank"><i class="' + sns +' icon"></i></a></li>'
      @text.html_safe
    else
      @text = '<li class="not-has"><i class="' + sns +' icon"></i></li>'
      @text.html_safe
    end
  end
  
  # 職種名をカタカナに変更
  def gravatar_for(user, size)
    gravatar_id = Digest::MD5::hexdigest(user.email.downcase)
    gravatar_url = "https://secure.gravatar.com/avatar/#{gravatar_id}?s=#{size}"
    image_tag(gravatar_url, alt: user.name, class: "gravatar")
  end
  
  # DBにそのレコードが存在するかどうか
  def existDB(model, id)
    model.exists?(id: id)
  end
  
  # 職種別一覧表示
  def getStaffs(jobid)
    @jobMember = Staff.where(jobcategory_id: jobid)
  end
  
  # 課に居る人取得
  def getDivisionsStaff(member , divid)
    @dvisionMember = member.where(division_id: divid)
  end
  
  def exitDivisionStaff?
    getDivisionsStaff.present?
  end
  

end
