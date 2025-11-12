// search.js
export function initCardSearch(inputSelector = "#search-input", cardSelector = ".card", headerSelector = "h1, h2, h3, h4, h5, h6") {
  const input = document.querySelector(inputSelector);
  if (!input) {
    console.warn(`Search input not found: ${inputSelector}`);
    return;
  }

  const cards = Array.from(document.querySelectorAll(cardSelector));
  if (!cards.length) {
    console.warn(`No cards found for selector: ${cardSelector}`);
    return;
  }

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase().trim();

    cards.forEach(card => {
      // Find all header elements inside the card
      const headers = card.querySelectorAll(headerSelector);
      const match = Array.from(headers).some(header => 
        header.textContent.toLowerCase().includes(query)
      );

      // Show or hide the card based on match
      card.style.display = match ? "" : "none";
    });
  });
}
