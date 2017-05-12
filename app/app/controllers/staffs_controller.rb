class StaffsController < ApplicationController
  def new
    @staff = Staff.new
  end
end
