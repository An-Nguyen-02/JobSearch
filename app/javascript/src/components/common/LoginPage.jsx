import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

// --- Simulated API function ---
// In a real Rails app, this would use Axios/Fetch to post data to a controller endpoint (e.g., /login)
const apiLogin = async ({ email, password }) => {
  // 💡 Placeholder for network request
  await new Promise(resolve => setTimeout(resolve, 1500)); 

  if (email === 'test@example.com' && password === 'password') {
    // Simulate successful API response data
    return { user: { email: email, token: 'fake-jwt-token-123' } };
  } else {
    // Throw an error that useMutation will catch
    throw new Error('Invalid email or password.');
  }
};
// ------------------------------

function LoginPage({ onLoginSuccess, onLoginError }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: apiLogin,
    onSuccess: (data) => {
      console.log("Login successful! User data:", data.user);
      
      // 1. Invalidate relevant queries (e.g., fetch the newly logged-in user data)
      queryClient.invalidateQueries({ queryKey: ['currentUser'] });
      
      // 2. Execute success callback (e.g., redirect the user)
      if (onLoginSuccess) {
          onLoginSuccess(data.user);
      }
    },
    onError: (error) => {
      console.error("Login failed:", error.message);
      // 1. Execute error callback
      if (onLoginError) {
          onLoginError(error.message);
      }
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Call the mutation function provided by useMutation
    loginMutation.mutate({ email, password, rememberMe });
  };

  const { isPending, isError, error } = loginMutation;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-lg p-4">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>

              {/* Displaying error from TanStack Query hook */}
              {isError && (
                <div className="alert alert-danger" role="alert">
                  Login failed: **{error.message}**
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isPending}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordInput"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isPending}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMeCheck"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    disabled={isPending}
                  />
                  <label className="form-check-label" htmlFor="rememberMeCheck">Remember me</label>
                </div>
                <div className="d-grid gap-2 mb-3">
                  <button type="submit" className="btn btn-primary btn-lg" disabled={isPending}>
                    {isPending ? (
                      <>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span className="ms-2">Logging in...</span>
                      </>
                    ) : (
                      'Login'
                    )}
                  </button>
                </div>
                <p className="text-center text-muted">
                  Don't have an account? <a href="/signup">Sign Up</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;