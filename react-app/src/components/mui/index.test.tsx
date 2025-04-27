import { render, screen } from "../../test-utils";
import { MuiMode } from "./index";
import { describe } from "vitest";

describe("MuiMode", () => {
    test("render text correctly", () => {
        render(<MuiMode />);
        const headingElement = screen.getByRole("heading")
        expect(headingElement).toHaveTextContent("dark mode");
    })

})