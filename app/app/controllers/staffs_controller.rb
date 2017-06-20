class StaffsController < ApplicationController
  def index
    @staffs = Staff.all
    @jobcategoris = Jobcategory.all
    @divisions = Division.all
  end
  
  def new
    @staff = Staff.new
  end
  
  def show
    if !logged_in?
      redirect_to root_path
    else 
      #DBにレコードが存在するかどうか
      if view_context.existDB(Staff, params[:id])
        @staff = Staff.find(params[:id])
        @job = Jobcategory.find(@staff.jobcategory_id)
        @division = Division.find(@staff.division_id)
      else
        render "nomember"
      end
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
  
  def edit
     @staff = Staff.find(params[:id])
  end
  
  def update
    @staff = Staff.find(params[:id])
    if @staff.update(user_params)
      redirect_to @staff
    else
      render "edit"
    end
  end
  
  
  
  # 以下privateクラス
  private
    def user_params
      params.require(:staff).permit(:name, :email, :password,:password_confirmation, :jobcategory_id, :division_id, :twitter, :facebook, :slack)
    end

  
  
end
