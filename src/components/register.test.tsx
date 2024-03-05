import { render, screen } from "@testing-library/react";
import Register from "./Register";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
import { utils } from "../helper/empty";
import { ERROR_MESSAGE } from "../constants/validation";


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
    "Button": screen.getByRole("button", { name: "ثبت نام" })
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



    await user.type(getElement("email"), "a@a.com");
    await user.type(getElement("password"), "12345");
    await user.type(getElement("confPassword"), "12345");

    expect(getElement("email").value).toBe("a@a.com");
    expect(getElement("password").value).toBe("12345");
    expect(getElement("confPassword").value).toBe("12345");


  });
  test("Button should be disabled when all of the inputs are empty", () => {
    expect(getElement("Button")).toBeDisabled();

    // jest spyOn
    const isEmpty: any = jest.spyOn(utils, "isEmpty");
    utils.isEmpty(getElement("email").value)
    utils.isEmpty(getElement("password").value)
    utils.isEmpty(getElement("confPassword").value)

    expect(isEmpty).toHaveBeenCalledTimes(3)

  })
  test("Button should be Enabled when all of the inputs are filled", async () => {
    const user = userEvent.setup()
    await user.type(getElement("email"), "a@a.com");
    await user.type(getElement("password"), "12345");
    await user.type(getElement("confPassword"), "12345");

    expect(getElement("Button")).toBeEnabled();
    expect(getElement("Button")).not.toBeDisabled();

  });

  describe("Handle errors and navigation", () => {
    beforeEach(() => {
      expect(screen.queryByText(ERROR_MESSAGE.EMAIL)).not.toBeInTheDocument()
      expect(screen.queryByText(ERROR_MESSAGE.PASSWORD)).not.toBeInTheDocument()
      expect(screen.queryByText(ERROR_MESSAGE.CONFIRM_PASSWORD)).not.toBeInTheDocument()
    });
    test("Should show email error when intering invalid email", async () => {
      const user = userEvent.setup()
      await user.type(getElement("email"), "abc.com")
      await user.type(getElement("password"), "12345");
      await user.type(getElement("confPassword"), "12345");

      await user.click(getElement("Button"));

      expect(screen.getByText(ERROR_MESSAGE.EMAIL)).toBeInTheDocument()

    });
    test("Should show password error when intering invalid password", async () => {
      const user = userEvent.setup()
      await user.type(getElement("email"), "a@a.com")
      await user.type(getElement("password"), "123");
      await user.type(getElement("confPassword"), "12345");

      await user.click(getElement("Button"));

      expect(screen.getByText(ERROR_MESSAGE.PASSWORD)).toBeInTheDocument()

    });
    test("Should show confirm password error when intering invalid confirm password", async () => {
      const user = userEvent.setup()
      await user.type(getElement("email"), "a@a.com")
      await user.type(getElement("password"), "12345");
      await user.type(getElement("confPassword"), "123");

      await user.click(getElement("Button"));

      expect(screen.getByText(ERROR_MESSAGE.CONFIRM_PASSWORD)).toBeInTheDocument()

    });
  })
});
