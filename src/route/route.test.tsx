import { render, screen } from "@testing-library/react";
import { AppRouter } from ".";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom'

describe("Router", () => {
    test("Should load products page in router", () => {
        const route = "/products";
        render(
            <MemoryRouter initialEntries={[route]}>
                <AppRouter />
            </MemoryRouter>
        );
        expect(screen.getByText("Products")).toBeInTheDocument();
    })
})