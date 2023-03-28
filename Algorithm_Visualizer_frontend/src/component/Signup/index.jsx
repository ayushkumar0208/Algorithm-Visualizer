import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
  const [otp, setOtp] = useState();
  const [show, setShow] = useState(true);

  const verifyOtp = () => {
    fetch("http://localhost:8800/getOtp/" + data.email, {
      method: "GET",
      headers: { Accept: "application/json" },
    })
      .then((response) => response.json())
      .then((result) => {
        // props.setArrays(result[0].Arrays);
        console.log(result.otp);
        console.log(otp);
        if (result.otp === otp) {
          axios
            .post("http://localhost:8800/userVerified/" + data.email)
            .then((response) => {
              console.log("User verified");
            });
        }
      });
    setMsg("OTP Verified !");
  };

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    otp: Math.floor(Math.random() * 1000000).toString(),
  });
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleChangeotp = (e) => {
    const data = e.target.value;
    setOtp(data);
    console.log(otp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShow(false);
    try {
      const url = "http://localhost:8800/api/users";
      const { data: res } = await axios.post(url, data);
      console.log(data);
      setMsg(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Sign in
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          {show ? (
            <form className={styles.form_container} onSubmit={handleSubmit}>
              <h1>Create Account</h1>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
                required
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
                value={data.lastName}
                required
                className={styles.input}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className={styles.input}
              />

              <button type="submit" className={styles.green_btn}>
                Sign Up
              </button>
            </form>
          ) : (
            <div >
              <input
                type="text"
                placeholder="Enter OTP"
                name="otp"
                value={otp}
                onChange={handleChangeotp}
                className={styles.inputOtp}
              />
              <button onClick={verifyOtp} className ={styles.green_btn_Otp}>Verify OTP</button>
            </div>
          )}
          {error && <div className={styles.error_msg}>{error}</div>}
          {msg && <div className={styles.success_msg}>{msg}</div>}
        </div>
      </div>
    </div>
  );
};

export default Signup;
