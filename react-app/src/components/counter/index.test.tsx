import { render, screen } from "@testing-library/react";
import { Counter } from "./index";
import user from '@testing-library/user-event'
import { describe } from "vitest";

//https://www.youtube.com/watch?v=kqX14UyjhDM&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=37
describe("Counter", () => {
    test("render correctly", () => {
        render(<Counter />);
        const countElement = screen.getByRole("heading")
        expect(countElement).toBeInTheDocument();
        const incrementButton = screen.getByRole("button", {
            name: "Increment"
        })
        expect(incrementButton).toBeInTheDocument();
    })

    test("renders a count of 0", () => {
        render(<Counter />);
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("0");
    })

    test("renders a count of 1 after clicking the button", async () => {
        render(<Counter />);
        const incrementButton = screen.getByRole("button", {
            name: "Increment"
        })
        await user.click(incrementButton);
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("1");
    })

    test("renders a count of 2 after clicking the button twice", async () => {
        render(<Counter />);
        const incrementButton = screen.getByRole("button", {
            name: "Increment"
        })
        await user.dblClick(incrementButton);
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("2");
    })

    test("renders a count of 10 after clicking the set button", async () => {
        user.setup();
        render(<Counter />);
        const amountInput = screen.getByRole("spinbutton");
        await user.type(amountInput, "10");
        expect(amountInput).toHaveValue(10);
        const setButton = screen.getByRole("button", {
            name: "Set"
        })
        await user.click(setButton);
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("10");
    })

    test("elements are focused in right order", async () => {
        user.setup();
        render(<Counter />);
        const incrementButton = screen.getByRole("button", {
            name: "Increment"
        })
        const amountInput = screen.getByRole("spinbutton");
        const setButton = screen.getByRole("button", {
            name: "Set"
        })
        await user.tab();
        expect(incrementButton).toHaveFocus();
        await user.tab();
        expect(amountInput).toHaveFocus();
        await user.tab();
        expect(setButton).toHaveFocus();
    })
})