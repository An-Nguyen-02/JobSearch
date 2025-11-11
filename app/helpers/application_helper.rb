module ApplicationHelper
  NO_REQUIRE_LOGIN = ["login.show"]
  def init_session(person_id)
    reset_session
    user = UserService.new(nil).find_user(person_id)
    session[:person_id] = user.id
  end

  def require_login
    if !logged_in? && !NO_REQUIRE_LOGIN.include?("#{self.controller_name}.#{action_name}")
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

  def react_component(name, props = {}, html_options = {})
    # 1. Ensure props are correctly serialized to a JSON string
    props_json = props.to_json 

    # 2. Define the mandatory data attributes needed by the Stimulus controller
    data_attributes = {
      'data-controller'        => 'react',
      'data-react-class-value' => name,
      'data-react-props-value' => props_json
    }

    # 3. Merge custom HTML options and Stimulus data attributes.
    # We use string keys for the data attributes because that's what xml.tag! expects 
    # when you want literal data- names.
    attributes = html_options.merge(data_attributes)
    
    # 4. Use xml.tag! to render the div.
    # Since this is a helper function, we assume it's called within an xml.builder context.
    return content_tag(:div, '', attributes)
  end
end
