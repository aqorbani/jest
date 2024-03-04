import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EMAIL_PATTERN, ERROR_MESSAGE } from "../constants/validation";

export default function Register() {
  const [registerInput, setRegisterInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterInput({ ...registerInput, [e.target.name]: e.target.value });
  };

  const submitHandler = () => {
    if (!EMAIL_PATTERN.test(registerInput.email)) {
      return setError(ERROR_MESSAGE.EMAIL);
    } else if (registerInput.password.length < 5) {
      return setError(ERROR_MESSAGE.PASSWORD);
    } else if (registerInput.password !== registerInput.confirmPassword) {
      return setError(ERROR_MESSAGE.CONFIRM_PASSWORD);
    }
    navigate("/products");
  };

  return (
    <div>
      <h1>Register</h1>
      {error && <p className="text-red-800 font-semibold">{error}</p>}
      <div>
        <label htmlFor="email">ایمیل</label>
        <input
          type="email"
          id="email"
          name="email"
          value={registerInput.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">رمز عبور</label>
        <input
          type="password"
          id="password"
          name="password"
          value={registerInput.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">تکرار رمز عبور</label>
        <input
          type="confirmPassword"
          id="confirmPassword"
          name="confirmPassword"
          value={registerInput.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit" onClick={submitHandler}>
          ثبت نام
        </button>
      </div>
    </div>
  );
}
