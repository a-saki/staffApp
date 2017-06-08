class StaffsController < ApplicationController
  def new
    @staff = Staff.new
  end
  
  def show
    if !logged_in?
      redirect_to root_path
    else
      @staff = Staff.find(params[:id])
      @job = Jobcategory.find(@staff.jobcategory_id)
      @division = Division.find(@staff.division_id)
    end
  end
  
  
  def create
    @staff = Staff.new(user_params)
    if @staff.save
      log_in @staff
      flash.now[:success] = "登録されました。"
      redirect_to @staff
    else
      render 'new'
    end
  end
  
  
  # 以下privateクラス
  private
    def user_params
      params.require(:staff).permit(:name, :email, :password,:password_confirmation, :jobcategory_id, :division_id, :twitter, :facebook, :slack)
    end

  
  
end
