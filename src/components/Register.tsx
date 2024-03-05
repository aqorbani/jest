import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EMAIL_PATTERN, ERROR_MESSAGE } from "../constants/validation";
import { utils } from "../helper/empty";

export default function Register() {
  const navigate = useNavigate();
  const [registerInput, setRegisterInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

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
    <div className="p-2 flex flex-col justify-center items-center">
      <h3 className="font-extrabold text-2xl">ثبت نام</h3>
      {error && <p className="text-red-800 font-semibold">{error}</p>}
      <div className="w-80 m-1 bg-orange-300 p-2 rounded">
        <label htmlFor="email">ایمیل</label>
        <input
          className="w-full"
          type="email"
          id="email"
          name="email"
          placeholder="email"
          value={registerInput.email}
          onChange={handleChange}
        />
      </div>
      <div className="w-80 m-1 bg-orange-300 p-2 rounded">
        <label htmlFor="password">رمز عبور</label>
        <input
          className="w-full"
          type="password"
          id="password"
          name="password"
          value={registerInput.password}
          onChange={handleChange}
        />
      </div>
      <div className="w-80 m-1 bg-orange-300 p-2 rounded">
        <label htmlFor="confirmPassword">تکرار رمز عبور</label>
        <input
          className="w-full"
          type="confirmPassword"
          id="confirmPassword"
          name="confirmPassword"
          value={registerInput.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <div className="w-80">
        <button
          className="w-full bg-orange-900 rounded text-white"
          type="submit"
          onClick={submitHandler}
          disabled={
            utils.isEmpty(registerInput.email) ||
            utils.isEmpty(registerInput.password) ||
            utils.isEmpty(registerInput.confirmPassword)
          }
        >
          ثبت نام
        </button>
      </div>
    </div>
  );
}
