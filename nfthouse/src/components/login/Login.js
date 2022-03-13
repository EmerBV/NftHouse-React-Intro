import React from 'react'

import '../../index.css'

const style = {
   signinWrapper: `flex justify-center items-center w-full h-screen bg-[#3b3d42]`,
   signinContainer: `relative block p-[50px] justify-center items-center w-[600px]`,
   signinText: `text-[34px] text-center text-white font-[600] mb-4`,
   formContainer: `p-[50px] rounded-lg border-[#151c22] border justify-center items-center`,
   inputContainer: `mb-4`,
   placeholderContainer: `h-[2rem] w-full border-0 rounded-md px-3 outline-0 ring-0`,
   loginBtnContainer: `flex justify-center items-center`,
   loginBtn: `border border-[#282b2f] bg-[#2081e2] hover:bg-[#42a0ff] p-[0.3rem] my-4 text-xl font-semibold rounded-lg cursor-pointer text-white w-[250px]`,
   questionContainer: `flex justify-center items-center`, 
}

const Login = () => {
    return (
        
        <div className={style.signinWrapper}>
            <div className={style.signinContainer}>
                
                <h1 className={style.signinText}>Sign In</h1>

                <form className={style.formContainer}>
                    <div className={style.inputContainer}>
                        <input className={style.placeholderContainer} type="text" name="user" placeholder="User name" required />
                    </div>
                    <div className="mb-4">
                        <input className={style.placeholderContainer} type="password" name="password" placeholder="Password" required />
                    </div>
                    <div className={style.loginBtnContainer}>
                        <button className={style.loginBtn} type="submit" disabled>LOGIN</button>
                    </div>
                    <div className={style.questionContainer}>
                        <p className="text-white">Don't have an <a className="hover:text-[#2081e2]" href="signup.html">account</a> yet?</p>
                    </div>
                </form>
    
            </div>
        </div>
        
    );
};

export default Login;
