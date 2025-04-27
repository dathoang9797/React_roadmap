import { render, screen } from "@testing-library/react";
import { MuiMode } from "./index";
import { describe } from "vitest";
import { AppProviders } from "@src/providers/AppProviders";

// https://www.youtube.com/watch?v=eA7MEy8dTYY&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=39
describe("MuiMode", () => {
    test("render text correctly", () => {
        render(<MuiMode />, {
            wrapper: AppProviders
        });
        const headingElement = screen.getByRole("heading")
        expect(headingElement).toHaveTextContent("dark mode");
    })

})