const quotes = [
  "Believe in yourself and all that you are.",
  "Success is not in what you have, but who you are.",
  "Your limitation—it's only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Dream it. Wish it. Do it.",
  "Great things never come from comfort zones.",
  "The harder you work for something, the greater you'll feel when you achieve it."
];

function generateQuote() {
  const quoteElement = document.getElementById("quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}
