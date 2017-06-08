module SessionsHelper
  def log_in(staff)
    session[:staff_id] = staff.id
  end
  
  def current_user
    @current_user ||= Staff.find_by(id: session[:staff_id])
  end
  
  def logged_in?
    !current_user.nil?
  end
  
  def log_out
    session.delete(:staff_id)
    @current_user = nil
  end
end
