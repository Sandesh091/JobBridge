

import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Jobs from "./jobs";

describe("full app rendering/navigating", () => {
  it("should navigate to Jobs page and check search value in input box", async () => {
    render(
      <MemoryRouter initialEntries={["/jobs"]}>
        <Jobs />
      </MemoryRouter>
    );

    const searchInput = screen.getByRole("searchbox", { name: "search-input" });
    const searchTerm = "React Developer";
    fireEvent.change(searchInput, { target: { value: searchTerm } });

    await waitFor(() => {
      expect(searchInput).toHaveValue(searchTerm);
    });
  });
});


