import { styles } from "../styles";
import { AnimatePresence, motion } from "framer-motion";
import ClipLoader from "react-spinners/ClipLoader";
import {
  yellow_capsule,
  pink_donut,
  blue_donut,
  purple_donut,
  yellow_donut,
  red_capsule,
  blue_capsule,
  green_capsule,
  light_green_capsule,
  eye,
  eye_off,
} from "../assets/index";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { user } = useContext(AuthContext);
  const {
    registerInfo,
    updateRegisterInfo,
    registerUser,
    registerError,
    isRegisterLoading,
    loginInfo,
    loginUser,
    updateLoginInfo,
    loginError,
    isLoginLoading,
  } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className={`relative h-screen lg:overflow-hidden xl:overflow-visible`}>
      <motion.img
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute top-0 left-0 w-[300px]"
        src={pink_donut}
        alt="shape"
      />
      <motion.img
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute bottom-[5%] left-1/2 w-[200px]"
        src={pink_donut}
        alt="shape"
      />
      <motion.img
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute top-[15%] right-[17%] w-[400px]"
        src={yellow_donut}
        alt="shape"
      />
      <motion.img
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute -bottom-[80px] left-[30%] w-[200px]"
        src={yellow_donut}
        alt="shape"
      />
      <motion.img
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute bottom-[20%] left-[10%] w-[500px]"
        src={blue_donut}
        alt="shape"
      />
      <motion.img
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute top-[5%] -right-[8%] w-[300px]"
        src={blue_donut}
        alt="shape"
      />
      <motion.img
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute bottom-0 right-[8%] w-[300px]"
        src={purple_donut}
        alt="shape"
      />
      <motion.img
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute -top-[23%] right-[50%] w-[400px]"
        src={purple_donut}
        alt="shape"
      />
      <motion.img
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute bottom-[10%] left-0 w-[100px]"
        src={yellow_capsule}
        alt="shape"
      />
      <motion.img
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute top-[30%] right-[60%] w-[100px]"
        src={green_capsule}
        alt="shape"
      />
      <motion.img
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute top-[5%] right-1/2 w-[100px]"
        src={red_capsule}
        alt="shape"
      />
      <motion.img
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute top-0 -left-[1%] w-[100px]"
        src={blue_capsule}
        alt="shape"
      />
      <motion.img
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute top-[10%] right-[15%] w-[100px]"
        src={blue_capsule}
        alt="shape"
      />
      <motion.img
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute top-1/2 right-[5%] w-[100px]"
        src={green_capsule}
        alt="shape"
      />
      <motion.img
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute w-[100px] top-[30%] left-[5%]"
        src={light_green_capsule}
        alt="shape"
      />
      <p className="absolute top-6 left-[2%] text-white font-bold text-[50px]">
        {" "}
        WESH !
      </p>
      <div
        className={`w-full h-full ${styles.paddingX} flex items-center justify-center`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-[600px] h-[600px] z-10 glass-box rounded-[20px]"
        >
          {showLogin && (
            <AnimatePresence>
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{
                  type: "spring",
                  mass: 0.4,
                  damping: 8,
                }}
                className="flex flex-col items-center py-9 w-full h-full"
              >
                <p className="text-white font-semibold text-[27px]">
                  Welcome to WESH !{" "}
                </p>
                <form
                  onSubmit={loginUser}
                  className="flex flex-col items-center justify-center"
                >
                  <label className="flex flex-col text-[15px] w-[340px] mt-20">
                    <input
                      type="email"
                      placeholder="Email"
                      onChange={(e) =>
                        updateLoginInfo({
                          ...loginInfo,
                          email: e.target.value,
                        })
                      }
                      className="rounded-[20px] py-3 px-6 font-medium bg-white"
                    />
                  </label>
                  <label className="relative flex flex-col  text-[15px] w-[340px] mt-9">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      onChange={(e) =>
                        updateLoginInfo({
                          ...loginInfo,
                          password: e.target.value,
                        })
                      }
                      className="textbox rounded-[40px] py-3 px-6 font-medium bg-white"
                    />
                    <img
                      className="absolute top-3 right-3 bg-transparent w-[25px] hover:cursor-pointer"
                      src={showPassword ? eye : eye_off}
                      alt="frame"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </label>

                  <motion.button
                    type="submit"
                    whileHover={{
                      backgroundColor: "#83DDC8",
                      boxShadow: "0px 0px 10px rgb(255,255,255)",
                    }}
                    whileTap={{ y: 5 }}
                    className={`mt-12 bg-white text-[17px] font-semibold ${
                      isLoginLoading ? "p-1" : "p-2"
                    } w-[100px] rounded-[20px]`}
                  >
                    {isLoginLoading ? (
                      <ClipLoader color="#000000" size={25} />
                    ) : (
                      "Login"
                    )}
                  </motion.button>
                </form>
                <div className="flex flex-row gap-2 mt-9 text-[15px]">
                  <p className="text-white">you don't have an account ?</p>
                  <div
                    className="text-light-green-color hover:cursor-pointer"
                    onClick={() => {
                      setShowRegister(true);
                      setShowLogin(false);
                    }}
                  >
                    Register
                  </div>
                </div>
                {loginError?.error && (
                  <p className="text-red-700 mt-6 bg-red-200 px-6 py-1 rounded-[10px] text-[15px]">
                    {loginError.message}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          )}

          {showRegister && (
            <AnimatePresence>
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{
                  type: "spring",
                  mass: 0.4,
                  damping: 8,
                }}
                className="flex flex-col items-center py-9 w-full h-full"
              >
                <p className="text-white font-semibold text-[27px]">
                  Create an account{" "}
                </p>
                <form
                  onSubmit={registerUser}
                  className="flex flex-col items-center justify-center"
                >
                  <label className="flex flex-col text-[15px] w-[340px] mt-20">
                    <input
                      type="text"
                      onChange={(e) =>
                        updateRegisterInfo({
                          ...registerInfo,
                          name: e.target.value,
                        })
                      }
                      placeholder="Name"
                      className="rounded-[20px] py-3 px-6 font-medium bg-white"
                    />
                  </label>
                  <label className="flex flex-col text-[15px] w-[340px] mt-9">
                    <input
                      type="email"
                      placeholder="Email"
                      onChange={(e) =>
                        updateRegisterInfo({
                          ...registerInfo,
                          email: e.target.value,
                        })
                      }
                      className="rounded-[20px] py-3 px-6 font-medium bg-white"
                    />
                  </label>
                  <label className="relative flex flex-col  text-[15px] w-[340px] mt-9">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      onChange={(e) =>
                        updateRegisterInfo({
                          ...registerInfo,
                          password: e.target.value,
                        })
                      }
                      className="textbox rounded-[40px] py-3 px-6 font-medium bg-white"
                    />
                    <img
                      className="absolute top-3 right-3 bg-transparent w-[25px] hover:cursor-pointer"
                      src={showPassword ? eye : eye_off}
                      alt="frame"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </label>

                  <motion.button
                    type="submit"
                    whileHover={{
                      backgroundColor: "#DED35E",
                      boxShadow: "0px 0px 10px rgb(255,255,255)",
                    }}
                    whileTap={{ y: 5 }}
                    className={`mt-12 bg-white text-[17px] font-semibold ${
                      isLoginLoading ? "p-1" : "p-2"
                    } w-[100px] rounded-[20px]`}
                  >
                    {isRegisterLoading ? (
                      <ClipLoader color="#000000" size={25} />
                    ) : (
                      "Register"
                    )}
                  </motion.button>
                </form>
                <div className="flex flex-row gap-2 mt-9 text-[15px]">
                  <p className="text-white">you already have an account ?</p>
                  <div
                    className="text-yellow-color hover:cursor-pointer"
                    onClick={() => {
                      setShowRegister(false);
                      setShowLogin(true);
                    }}
                  >
                    Login
                  </div>
                </div>
                {registerError?.error && (
                  <p className="text-red-700 mt-6 bg-red-200 px-6 py-1 rounded-[10px] text-[15px]">
                    {registerError.message}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
