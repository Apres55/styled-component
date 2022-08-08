import React, {useState} from "react";
import Logo from "./images/logo-component";
import LinksUp from "./sign-up-links";
import CopyrightFoot from "./copyright-footer";

const SignUpArea = () => {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const nameValidator  = /^[A-Za-z]{3,}$/;
    const emailValidator = /^[.\S]{3,}@[A-Za-z]{2,}\.[A-Za-z]{2,}/;
    const passwordValidator = /(?=.*[a-z])(?=.*[A-Z])\S{8,}/;

    const signupUser = (e) => {
        e.preventDefault();
        if(name.match(nameValidator) && lastName.match(nameValidator) && email.match(emailValidator) && password.match(passwordValidator)){
            localStorage.setItem("name", name);
            localStorage.setItem("lastName", lastName);
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
        } else {
            alert(`Name and lastname must be at least 3 characters long.
            The password must be at least 8 characters, uppercase
            and lowercase.
            Email must contain minimum 3 characters, @, minimum 
            2 characters, period and minimum 2 characters.`);
        }
        setName("");
        setLastName("");
        setEmail("");
        setPassword("");
    }

    return(
        <div className="sign-up-area">
            <Logo />
            <div className='login-inputs-div'>
                <h2>
                    Sign-up
                </h2>
                    <form className="login-form" action="#" onSubmit={signupUser}>
                    <div className="user-info-inputs">
                        <input type="name"
                            style={{borderColor: name === "" ? "grey" : name.match(nameValidator) ? "green" : "red"}}
                            placeholder="Name *"
                            value={name}
                            onChange={(e) => {setName(e.target.value)}} required>
                        </input>
                        <input type="surename"
                            style={{borderColor: lastName === "" ? "grey" : lastName.match(nameValidator) ? "green" : "red"}}
                            placeholder="Last Name *"
                            value={lastName}
                            onChange={(e) => {setLastName(e.target.value)}} required>
                        </input>
                    </div>
                        <input className="input-place" type="email"
                            style={{borderColor: email === "" ? "grey" : email.match(emailValidator) ? "green" : "red"}}
                            placeholder="Enter your email *"
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}} required>
                        </input>
                    
                        <input className="input-place" type="password"
                            style={{borderColor: password === "" ? "grey" : password.match(passwordValidator) ? "green" : "red"}}
                            placeholder="Enter password *"
                            value={password}
                            onChange={(e) => {setPassword(e.target.value)}} required>
                        </input>
                        <div className="sign-up-checkboxdiv">
                            <label className="check-box-input" htmlFor="rememberMe"><input type="checkbox" id="one" onchange="fun1()" />I want to receive inspiration, marketing promotions and updates via email</label>
                        </div>
                        <button className="sign-up-btn" type="submit">
                            SIGN UP
                        </button>
                    </form> 
                <LinksUp />
                <CopyrightFoot />
            </div>
        </div>
    )
}

export default SignUpArea;