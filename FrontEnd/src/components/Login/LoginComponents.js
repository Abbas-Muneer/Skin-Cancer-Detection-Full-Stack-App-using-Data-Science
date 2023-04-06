import React from "react";

const LoginComponent = (props) => {
    const{ email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError, name, setName, passwordConfirm, setPasswordConfirm, nameError, passwordConfirmError} = props;

    return(
        <section className="login">
            <div className="loginContainer">
                <label> Email: </label>
                <input type="text" autoFocus required value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
                <p className="errorMsg">
                    {emailError}
                </p>
                {hasAccount ? (
                    <>
                    <label> Password: </label>
                    <input type="password" required value={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
                    <p className="errorMsg">
                        {passwordError}
                    </p>
                    <div className="btnContainer">
                        <button onClick={handleLogin}>
                            Sign in
                        </button>
                        <p>
                            Don't have an account ? 
                            <span onClick = {() => setHasAccount(!hasAccount)}> Sign up </span>
                        </p>
                    </div>
                    </>
                ) : (
                    <>
                    <label> Name: </label>
                    <input type="text" autoFocus required value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
                    <p className="errorMsg">
                        {nameError}
                    </p>
                    <label> Password: </label>
                    <input type="password" required value={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
                    <p className="errorMsg">
                        {passwordError}
                    </p>
                    <label> Confirm Password: </label>
                    <input type="password" required value={passwordConfirm} placeholder="Confirm Password" onChange={(e) => setPasswordConfirm(e.target.value)}/>
                    <p className="errorMsg">
                        {passwordConfirmError}
                    </p>
                    <div className="btnContainer">
                        <button onClick={handleSignup}>
                            Sign up
                        </button>
                        <p>
                            Already have an account ? 
                            <span onClick = {() => setHasAccount(!hasAccount)}> Sign in </span>
                        </p>
                    </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default LoginComponent;
