const newQuoteButton = document.querySelector("#js-new-quote");
const spinner = document.getElementById("js-spinner");

newQuoteButton.addEventListener("click", getQuote);

const endpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

async function getQuote() {
  spinner.classList.remove("hidden");
  newQuoteButton.disabled = true;
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    displayQuote(json.message);
  } catch (err) {
    console.log(err);
    alert("Failed to fetch quote");
  } finally {
    newQuoteButton.disabled = false;
    spinner.classList.add("hidden");
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

getQuote();
