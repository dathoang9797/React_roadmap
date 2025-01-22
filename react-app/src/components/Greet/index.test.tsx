import { render, screen } from "@testing-library/react"
import { test } from "vitest";
import { Greet } from ".";


describe("Greet component", () => {
    test("Greet component renders correctly", () => {
        render(<Greet />);
        const textElement = screen.getByText(/hello/i);
        expect(textElement).toBeInTheDocument();
    })
})

describe("Nested",( ) => {
    test("Greet renders with a name", () => {
        render(<Greet name="Dat" />);
        const textElement = screen.getByText(`Hello Dat`);
        expect(textElement).toBeInTheDocument();
    })
})