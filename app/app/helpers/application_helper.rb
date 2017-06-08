module ApplicationHelper
  def list_jobcategories
    Jobcategory.select(:jobcategory_name)
  end
end
