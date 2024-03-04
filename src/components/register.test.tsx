import { render, screen } from "@testing-library/react";
import Register from "./Register";
import { BrowserRouter } from "react-router-dom";

const getElement = (element: string) => {
  interface Obj {
    "email": HTMLInputElement;
    "password": HTMLInputElement;
    "confPassword": HTMLInputElement;
  }
  const elements: Obj = {
    "email": screen.getByRole("textbox", { name: "ایمیل" }),
    "password": screen.getByLabelText("رمز عبور"),
    "confPassword": screen.getByLabelText("تکرار رمز عبور"),
  };
  if (elements[element as keyof Obj]) return elements[element as keyof Obj];
};

describe("Register page", () => {
  test("Input should be initially empty", () => {
    // ARRANGE
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );

    // ACT
    // change event - click event or ...
    // ASSERT

    expect(getElement("email").value).toBe("");
    expect(getElement("password").value).toBe("");
    expect(getElement("confPassword").value).toBe("");

    // getElement
    // findElement
    // queryElement
    // getAll...
    // finaAll...
    // queryAll...
  });
});
