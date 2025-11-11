
form_with(model: @user, url: users_path, data: { turbo_frame: "modal" }) do |f|
  html.div(class: "modal") do
    html.div(class: "modal-content") do
      html.h2 "New User"

      html.div(class: "field") do
        html.label "Name", for: "user_name"
        f.text_field :name
      end

      html.div(class: "field") do
        html.label "Email", for: "user_email"
        f.email_field :email
      end

      html.div(class: "actions") do
        f.submit "Create", class: "btn btn-primary"
      end
    end
  end
end