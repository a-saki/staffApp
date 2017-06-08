class SessionsController < ApplicationController
  def new
  end
  
  def create
    staff = Staff.find_by(email: params[:session][:email].downcase)
    if staff && staff.authenticate(params[:session][:password])
      log_in staff
      redirect_to staff
    else
      flash.now[:danger] ="ユーザー名とメールアドレスが正しくありません。"
      render "new"
    end
    
  end
  
  def destroy
    log_out
    redirect_to root_url
  end
end
