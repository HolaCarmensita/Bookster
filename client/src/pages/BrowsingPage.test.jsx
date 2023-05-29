import { fireEvent, render, screen } from "@testing-library/react";
import BrowsingPage from "./BrowsingPage";
import { BrowserRouter } from "react-router-dom";

test("När en bookster-user söker i sökfältet så filtreras listan på böcker till de titlar/författare som matchar sökningen. För att användaren snabbt ska kunna se om önskad bok finns.", async () => {
  render(
    <BrowserRouter>
      <BrowsingPage />
    </BrowserRouter>
  );

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "harry" } });

  const title = await screen.findByTestId("0title/username", "", { timeout: 2000 });

  expect(title.innerHTML).toBe("Harry potter the sorcerer's stone");
});
