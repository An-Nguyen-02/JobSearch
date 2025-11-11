class LoginController < ApplicationController

  after_action :set_cors, only: :confirm_login
  protect_from_forgery except: [:confirm_login, :show], with: :exception

  skip_before_action :verify_authenticity_token, only: [:logout]

  # GET /login/show (login_show)
  def show

  end

  # GET /login/confirm_login (login_confirm_login)
  def confirm_login

    if check_user_correct_pass
      init_session(authenticated_user)
    end
  end

  # GET /login/logout (login_logout)
  def logout
    reset_session
  end
end
