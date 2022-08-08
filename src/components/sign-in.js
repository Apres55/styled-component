import React, {useEffect, useState} from "react";
import Links from "./sign-in-links";
import Logo from "./images/logo-component";
import CopyrightFoot from "./copyright-footer";


const SignInArea = () => {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [rememberMe, setrememberMe] = useState("");

    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    const validation = (e) => {
        e.preventDefault();
        if(userEmail === email && userPassword === password) {
            alert("SUCCESSFULL LOGIN :)");
            setUserEmail("");
            setUserPassword("");
        } else {
            alert("Fail :( => wrong password or email, try again");
        }

        if(rememberMe === "on") {
            localStorage.setItem("userEmail", userEmail);
            localStorage.setItem("userPassword", userPassword);
        }
    };

    const data = () => {
        setUserEmail(localStorage.getItem("userEmail"));
        setUserPassword(localStorage.getItem("userPassword"));
    };

    useEffect(() => data(), [])

    return(
        <div className="sign-in-area">
            <Logo />
            <div className='login-inputs-div'>
                <h2>
                    Sign-in
                </h2>
                <form 
                    className="login-form"
                    action="#"
                    onSubmit={validation}
                >
                    <input className="input-place" type="email"
                        placeholder="Enter your email *"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)} required>
                    </input>
                    
                    <input className="input-place" type="password"
                        placeholder="Enter password *"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)} required>
                    </input>
                    <div className="check-box">
                        <label className="check-box-input">
                            <input className="xd" type="checkbox" id="one" onChange={(e) => setrememberMe(e.target.value)} />Remember me
                        </label>
                    </div>
                    <button className="parse-in">
                        SIGN IN
                    </button>
                </form>
                <Links />
                <CopyrightFoot />
            </div>
        </div>
    )
}

export default SignInArea;