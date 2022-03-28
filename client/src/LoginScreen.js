import React from "react";

function LoginScreen() {
  return (
    <div className="login">
      <form
      //   onSubmit={handleSubmit}
      >
        <div className="form-name">
          <span>Login to view restaurants!</span>
        </div>
        <br />
        <div>
          <input
            className="login-form"
            type="text"
            name="username"
            placeholder="Username:"
            // onChange={handleChange}
          />
        </div>
        <div>
          <input
            className="login-form"
            type="text"
            name="password"
            placeholder="Pasword:"
            // onChange={handleChange}
          />
        </div>
      </form>
      <input
        className="login-button"
        type="submit"
        value="Login!"
        //   onSubmit={handleSubmit}
      />
    </div>
  );
}

export default LoginScreen;
