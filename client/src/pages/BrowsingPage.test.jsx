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

test("Som guest vill jag kunna se vilka böcker som finns och kvantitet, så jag vet om jag vill handla innan jag skapar ett konto eller loggar in.", async () => {
  render(
    <BrowserRouter>
      <BrowsingPage />
    </BrowserRouter>
  );

  const eragon = await screen.findByTestId("0title/username", "", { timeout: 2000 });
  const harryPotter = await screen.findByTestId("1title/username", "", { timeout: 2000 });
  const nightingale = await screen.findByTestId("2title/username", "", { timeout: 2000 });
  const annaKarenina = await screen.findByTestId("3title/username", "", { timeout: 2000 });

  expect(eragon).toBeInTheDocument();
  expect(harryPotter).toBeInTheDocument();
  expect(nightingale).toBeInTheDocument();
  expect(annaKarenina).toBeInTheDocument();
});
