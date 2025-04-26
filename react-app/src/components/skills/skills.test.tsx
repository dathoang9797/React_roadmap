import { render, screen, logRoles } from "@testing-library/react";
import { Skills } from "./skills";
import { describe, test } from "vitest";

// https://www.youtube.com/watch?v=mSWYQUXXF5Q&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=35
describe("Skills", () => {
    const skills = ['HTML', 'CSS', 'JavaScript'];

    test("render correctly", () => {
        render(<Skills skills={skills} />)
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    })

    test("render a list of skills", () => {
        render(<Skills skills={skills} />)
        const listItemElement = screen.getAllByRole("listitem");
        expect(listItemElement).toHaveLength(skills.length);
    })

    test("render Login button", () => {
        render(<Skills skills={skills} />)
        const loginButtonElement = screen.getByRole("button", {
            name: "Login"
        });

        expect(loginButtonElement).toBeInTheDocument();
    })

    test("Start learning button is not rendered", () => {
        render(<Skills skills={skills} />)
        const startLearningButton = screen.queryByRole("button", {
            name: "Start Learning"
        });

        expect(startLearningButton).not.toBeInTheDocument();
    })

    test("Start learning button is eventually displayed", async () => {
        const view = render(<Skills skills={skills} />);
        logRoles(view.container);
        // screen.debug();
        const startLearningButton = await screen.findByRole("button",
            {
                name: "Start Learning",
            },
            {
                timeout: 2000
            });
        // screen.debug();
        expect(startLearningButton).toBeInTheDocument();
    })
})