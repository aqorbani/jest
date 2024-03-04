import { render, screen } from "@testing-library/react";
import Register from "./Register";
import { BrowserRouter } from "react-router-dom";

describe("Register page", () => {
  test("Input should be initially empty", () => {
    // ARRANGE
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    const emailElement: HTMLInputElement = screen.getByRole("textbox", {
      name: "ایمیل",
    });

    // ACT
    // change event - click event or ...
    // ASSERT

    expect(emailElement.value).toBe("");

    // getElement
    // findElement
    // queryElement
    // getAll...
    // finaAll...
    // queryAll...
  });
});
