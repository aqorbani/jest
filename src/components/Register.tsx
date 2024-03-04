import { ChangeEvent, useState } from "react";

export default function Register() {
  const [registerInput, setRegisterInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterInput({ ...registerInput, [e.target.name]: e.target.value });
  };

  const submitHandler = () => {
    console.log(registerInput);
  };

  return (
    <div>
      <h1>Register</h1>
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
