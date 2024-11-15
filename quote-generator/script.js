const newQuoteButton = document.querySelector("#js-new-quote");

newQuoteButton.addEventListener("click", getQuote);

const endpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

async function getQuote() {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    console.log(json.message);
    displayQuote(json.message);
  } catch (err) {
    console.log(err);
    alert("Failed to fetch quote");
  }
}

function displayQuote(quote) {
  const newQuote = document.querySelector("#js-quote-text");

  const quoteText = newQuote;

  quoteText.innerHTML = `
        <h5>
            ${quote}
        </h5>
    `;
}
