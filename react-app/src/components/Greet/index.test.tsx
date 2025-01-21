import { render, screen } from "@testing-library/react"
import { test } from "vitest";
import { Greet } from ".";

test("Greet component renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
})


test("Greet renders with a name", () => {
    render(<Greet name="Dat"/>);
    const textElement = screen.getByText(`Hello Dat`);
    expect(textElement).toBeInTheDocument();
})