import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
        return(
            <div className="links-div">
                <Link to="/">Forgot-password?</Link>
                <Link to="/sign-up">Don't have an account? Sign Up</Link>
            </div>
        )
    }

export default Links;