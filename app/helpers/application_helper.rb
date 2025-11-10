module ApplicationHelper

  def init_session(person_id)
    reset_session
    user = UserService.new(nil).find_user(person_id)
    session[:person_id] = user.id
  end

  def require_login
    if !logged_in?
      return render json: {status: 'Please login'}, status: :unauthorized
      return false
    end

    true
  end

  def logged_in?
    !current_person_id.nil?
  end

  def current_person_id
    session[:person_id]
  end
end
