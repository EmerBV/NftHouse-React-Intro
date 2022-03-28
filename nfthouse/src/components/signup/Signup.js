import React from 'react'

import Header from '../header/Header'
import Footer from '../footer/Footer'

const style = {
  signupWrapper:
    'flex justify-center items-center h-screen bg-[#3b3d42] mx-auto p-[20px]',
  signupContainer:
    'relative block p-[50px] justify-center items-center w-[600px]',
  container: 'block',
  signupText: 'text-[34px] text-center text-white font-[600] mb-4',
  formContainer:
    'p-[50px] rounded-lg border-[#151c22] border justify-center items-center',
  inputWrapper: 'mb-4 ',
  inputContainer: 'h-[2rem] w-full border-0 rounded-md px-3 outline-0 ring-0',
  buttonContainer: 'flex justify-center items-center',
  submitButton:
    'border border-[#282b2f] bg-[#2081e2] hover:bg-[#42a0ff] p-[0.3rem] my-4 text-xl font-semibold rounded-lg cursor-pointer text-white w-[250px]'
}

const Signup = () => {
  return (
    <div>
      <Header />

      <div className={style.signupWrapper}>
        <div className={style.signupContainer}>
          <div className={style.container}>
            <h1 className={style.signupText}>Sign Up</h1>
            <form className={style.formContainer}>
              <div className={style.inputWrapper}>
                <input
                  className={style.inputContainer}
                  type="text"
                  name="textInput"
                  id="textInput"
                  placeholder="Email"
                  required
                />
              </div>
              <div className={style.inputWrapper}>
                <input
                  className={style.inputContainer}
                  type="password"
                  name="passwordInput"
                  id="passwordInput"
                  placeholder="Password"
                  required
                />
              </div>
              <div className={style.inputWrapper}>
                <input
                  className={style.inputContainer}
                  type="text"
                  name="username"
                  id="passwordMatchInput"
                  placeholder="Username"
                  required
                />
              </div>
              <div className={style.inputWrapper}>
                <input
                  className={style.inputContainer}
                  type="text"
                  name="textInput"
                  id="textInput"
                  placeholder="Name"
                  required
                />
              </div>

              <div className={style.buttonContainer}>
                <button className={style.submitButton} type="submit" disabled>
                  CONFIRM
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Signup
