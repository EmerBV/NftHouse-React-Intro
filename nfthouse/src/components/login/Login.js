import React from 'react';

import '../../index.css';

/* const style = {
   navWrapper: `max-w-full bg-[#04111d] px-[1.2rem] py-[0.2rem] items-center h-[72px] sticky top-0 z-[110] transition-[top] duration-[0.5s] ease-[0s] flex md:flex justify-between`,
   logoContainer: `mr-3`,
   searchBar: `hidden lg:flex md:flex flex-1`, 
} */

const Login = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-screen bg-[#3b3d42] mx-auto p-[20px]">
                <div className="relative block p-[50px] justify-center items-center w-[600px]">
                    <div className="block">
                        <h1 className="text-[34px] text-center text-white font-[600] mb-4">Sign In</h1>
                        <form className="p-[50px] rounded-lg border-[#151c22] border justify-center items-center">
                            <div className="mb-4">
                                <input className="h-[2rem] w-full border-0 rounded-md px-3 outline-0 ring-0" type="text" name="user" placeholder="User name" required />
                            </div>
                            <div className="mb-2">
                                <input className="h-[2rem] w-full border-0 rounded-md px-3 outline-0 ring-0" type="password" name="password" placeholder="Password" required />
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="border border-[#282b2f] bg-[#2081e2] hover:bg-[#42a0ff] p-[0.3rem] my-4 text-xl font-semibold rounded-lg cursor-pointer text-white w-[250px]" type="submit" disabled>LOGIN</button>
                            </div>
                            <div className="flex justify-center items-center">
                                <p className="text-white">Don't have an <a className="hover:text-[#2081e2]" href="signup.html">account</a> yet?</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
  
