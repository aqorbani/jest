import { render, screen, waitFor } from "@testing-library/react";
import Register from "./Register";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

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
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>);
  });
  test("Input should be initially empty", () => {
    // ARRANGE


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
  test("should be able to type into inputs and get value", async () => {
    const user = userEvent.setup()
    const emailInput: HTMLInputElement = screen.getByLabelText("ایمیل");

    user.type(getElement("email"), "a@a.com");

    await waitFor(() => expect(getElement("email").value).toBe("a@a.com"),)


  })
});
