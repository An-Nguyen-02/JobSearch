# The "xml" object is available in a Builder template.

xml.div :class => 'container d-flex justify-content-center mt-5' do
  xml.div :class => 'card shadow-lg p-4' do
    xml.h3 'User Access', :class => 'card-title text-center mb-4'
    
    # --- Login Form ---
    xml.form :action => '/login', :method => 'post' do
      
      # Username Input
      xml.div :class => 'mb-3' do
        xml.label 'Username:', :for => 'username', :class => 'form-label'
        xml.input :type => 'text', 
                   :id => 'username', 
                   :name => 'username', 
                   :class => 'form-control', 
                   :placeholder => 'Enter username', 
                   :required => true
      end
      
      # Password Input
      xml.div :class => 'mb-3' do
        xml.label 'Password:', :for => 'password', :class => 'form-label'
        xml.input :type => 'password', 
                   :id => 'password', 
                   :name => 'password', 
                   :class => 'form-control', 
                   :placeholder => 'Enter password', 
                   :required => true
      end
      
      # Login Button
      xml.button 'Login', :type => 'submit', :class => 'btn btn-primary w-100 mb-3'
    end
    
    # --- Registration Divider/Button ---
    xml.div :class => 'text-center' do
      xml.p '— OR —', :class => 'text-muted my-3'
      
      # Register Button
      xml.a :href => '/register', :class => 'btn btn-outline-secondary w-100' do
        xml.text 'Register'
      end
    end
  end
end