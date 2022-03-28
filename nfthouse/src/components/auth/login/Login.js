import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import { login } from "../service";
import AuthContext from "../context";

const style = {
  signinWrapper:
    "flex justify-center items-center w-full h-screen bg-[#3b3d42]",
  signinContainer:
    "relative block p-[50px] justify-center items-center w-[600px]",
  signinText: "text-[34px] text-center text-white font-[600] mb-4",
  formContainer:
    "p-[50px] rounded-lg border-[#151c22] border justify-center items-center",
  inputContainer: "mb-4",
  placeholderContainer:
    "h-[2rem] w-full border-0 rounded-md px-3 outline-0 ring-0",
  loginBtnContainer: "flex justify-center items-center",
  loginBtn:
    "border border-[#282b2f] bg-[#2081e2] p-[0.3rem] my-4 text-xl font-semibold rounded-lg text-white w-[250px]",
  questionContainer: "flex justify-center items-center",
};
function Login() {
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { handleLogin: onLogin } = useContext(AuthContext);

  useEffect(() => {
    ref.current.focus();
  }, []);

  const { email, password, remember } = credentials;

  const handleChange = useCallback((event) => {
    setCredentials((credentials) => ({
      ...credentials,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
  }, []);

  const resetError = () => setError(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      resetError();
      setIsLoading(true);
      await login(credentials);
      setIsLoading(false);
      onLogin();
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const buttonDisabled = useMemo(() => {
    return !email || !password || isLoading;
  }, [email, password, isLoading]);

  return (
    <div>
      <Header />
      <div className={style.signinWrapper}>
        <div className={style.signinContainer}>
          <h1 className={style.signinText}>Sign In</h1>

          <form className={style.formContainer} onSubmit={handleSubmit}>
            <div className={style.inputContainer}>
              <input
                className={style.placeholderContainer}
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
                ref={ref}
                autoComplete="off"
                placeholder="Email"
                required
              />
            </div>
            <div className={style.inputContainer}>
              <input
                className={style.placeholderContainer}
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                autoComplete="off"
                placeholder="Password"
                required
              />
            </div>

            <input
              type="checkbox"
              name="remember"
              checked={remember}
              value="remember"
              onChange={handleChange}
            />
            <label className="ml-2 text-white">Remember me</label>

            <div className={style.loginBtnContainer}>
              <button
                className={style.loginBtn}
                type="submit"
                disabled={buttonDisabled}
              >
                LOGIN
              </button>
            </div>
            <div className={style.questionContainer}>
              <p className="text-white">
                Don't have an{" "}
                <Link to="/signup" className="hover:text-[#2081e2]">
                  account
                </Link>{" "}
                yet?
              </p>
            </div>
          </form>

          {error && (
            <div onClick={resetError} className="loginPage-error">
              {error.message}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
