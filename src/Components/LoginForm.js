import React from "react";

const LoginForm = () => {
  return (
    <div>
      <main className="main1">
        <div className="form-container">
          <form>
            <div className="welcome-text">Welcome back! 👋</div>
            <div className="signup-text">Sign in to your account</div>
            <div className="email">
              <label for="email">Your email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="password">
              <label for="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <div className="btn">
              <button type="submit" id="continue">
                CONTINUE
              </button>
           </div>
           <div className="forgot-password">
                <a href="#">Forget Your Password</a>
            </div>
          </form>
          <div className="signup">
            Don't have an account? <a href="#">signup</a>
          </div>
          
        </div>
      </main>
    </div>
  )
};

export default LoginForm;
