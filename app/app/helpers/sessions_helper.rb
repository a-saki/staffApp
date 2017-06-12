module SessionsHelper
  def log_in(staff)
    session[:staff_id] = staff.id
  end
  
  def current_user
    if (staff_id = session[:staff_id])
      @current_user ||= Staff.find_by(id: staff_id)
    elsif (staff_id = cookies.signed[:staff_id])
      staff = Staff.find_by(id: staff_id)
      if staff && staff.authenticated?(cookies[:remember_token])
        log_in staff
        @current_user = staff
      end
    end
  end
  
  def is_sessioned_id
    if (staff_id = session[:staff_id])
      @current_user ||= Staff.find_by(id: staff_id)
    end
  end
  
  def remember(staff)
    staff.remember
    cookies.permanent.signed[:staff_id] = staff.id
    cookies.permanent[:remember_token] = staff.remember_token
  end
  
  def logged_in?
    !current_user.nil?
  end
  
  def log_out
    session.delete(:staff_id)
    @current_user = nil
  end
  
  def forget(staff)
    staff.forget
    cookies.delete(:staff_id)
    cookies.delete(:remember_token)
  end
  
  def log_out
    forget(current_user)
    session.delete(:staff_id)
    @current_user = nil
  end
end
