


import Main from "./mainsection";
import { render, screen } from "@testing-library/react";

describe("when rendered Main component with `heading` prop", () => {
    it("should display the heading passed through props", () => {
        const headingText = "Find Your Dream Job"; // Replace this with the expected heading text
        render(<Main heading={headingText} />);

        const headingElement = screen.getByText(headingText);
        expect(headingElement).toBeInTheDocument();
    });
});
