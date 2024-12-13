import React from 'react'

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import "./style.css"

function SignUp({ googleSignin, gitSignin }) {
    return (
        <div className="signup">
            <div className="signupCont">

                <h1>JOIN <span>IN</span></h1>
                <div className="regBtn googleBtn" onClick={googleSignin}>
                    <div className="regBtnIcon">
                        <FcGoogle />
                    </div>
                    <div className="regBtnTxt">
                        <p>Continue with Google</p>
                    </div>
                </div>

                <div className="regBtn gitBtn" onClick={gitSignin}>
                    <div className="regBtnIcon">
                        <FaGithub />
                    </div>
                    <div className="regBtnTxt">
                        <p>Continue with Github</p>
                    </div>
                </div>
                {/* <p>Already have and account?<span className='switch' onClick={() => setIsNew(!isNew)}>{isNew ? "login" : "signup"}</span> </p> */}


            </div>
        </div>
    )
}

export default SignUp