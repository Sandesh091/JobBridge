
import { render, screen } from "@testing-library/react";
import Footer from "./footer";

describe("check the footer works", () => {
    test("anchor tag for Home has correct URL", () => {
        render(<Footer />);

        const homeLink = screen.getByRole("link", { name: "JobBridge" });

        expect(homeLink).toHaveAttribute("href", "http://localhost:3000/#");
    });
});