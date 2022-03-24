import React from 'react'

function LoginScreen() {

  return (
    <div>
      <form 
    //   onSubmit={handleSubmit}
    >
        <div className="form-name">
          <span>Login to view restaurants!</span>
        </div>
        <br/>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username:"
            // onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            placeholder="Pasword:"
            // onChange={handleChange}
          />
        </div>
      </form>
      <input
        type="submit"
        value="Login!"
        //   onSubmit={handleSubmit}
      />
     </div>
  );
}

export default LoginScreen



