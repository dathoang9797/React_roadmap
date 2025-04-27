import { render, screen } from "../../test-utils";
import { MuiMode } from "./index";
import { describe } from "vitest";

// https://www.youtube.com/watch?v=Ru4V8yCR6jQ&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=40
describe("MuiMode", () => {
    test("render text correctly", () => {
        render(<MuiMode />);
        const headingElement = screen.getByRole("heading")
        expect(headingElement).toHaveTextContent("dark mode");
    })

})