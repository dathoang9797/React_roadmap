import { render, screen } from "@testing-library/react"
import { test } from "vitest";
import { Greet } from ".";

//https://www.youtube.com/watch?v=W-dc5fpxUVs&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=14
describe("Greet component", () => {
    test("Greet component renders correctly", () => {
        render(<Greet />);
        const textElement = screen.getByText(/hello/i);
        expect(textElement).toBeInTheDocument();
    })
})

// describe("Nested",(  ) => {
//     test("Greet renders with a name", () => {
//         render(<Greet name="Dat" />);
//         const textElement = screen.getByText(`Hello Dat`);
//         expect(textElement).toBeInTheDocument();
//     })
// }