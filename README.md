# Phintopia redesign concept

A concept redesign of the [Phintopia Coffee & Tea](https://www.phintopia.ca/) website (Ottawa). This is not the official site.

## Pages

- **`phintopia-redesign.html`**: the homepage.
  - **Pause Finder:** three questions (mood, hot or iced, coffee or tea) that end in one recommended drink.
  - **Phin brewer:** an animated phin filter that pours your answers into a glass.
  - **The Round:** pick a drink for each friend and order them together.
  - **Time of day:** the colours, copy and suggestions change with the clock in Ottawa.
  - **Visit:** the full week's hours next to a map.
- **`menu.html`**: all 29 drinks.
  - Search, mood filters and sticky section tabs.
  - "+ Add" buttons with quantity steppers.
  - An order bar that keeps the same order as the homepage.
- **`phintopia-data.js`**: shared by both pages. It holds the drinks, prices, drink colours, opening hours and the saved order.

## Running it

It's plain HTML, CSS and JavaScript, with no build step. Serve the folder and open the homepage:

```bash
python -m http.server 8765
```

Then go to http://localhost:8765/phintopia-redesign.html

## Deploying on Netlify

Import the repo with no build command and the publish directory set to `.`. The `_redirects` file serves the homepage at the site root, so the bare URL works.

## Notes

- Images load from Phintopia's existing image host. The exception is `img/drinks/`, which holds openly licensed stand-in photos from Wikimedia Commons for the 24 drinks Phintopia has no photo of. They show the style of drink, not Phintopia's own cups; the authors and licences are listed on the menu page under "Photo credits". Replace them with real photos when they exist.
- The final checkout goes to the live ordering page. The order is not passed into its cart.
- The time-of-day preview buttons in the top banner are for demos. Remove them before going live.
