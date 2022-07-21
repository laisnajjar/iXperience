const url = 'api.coincap.io/v2/assets'


async function fetchFacts() {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
}

function printFacts(assets) {
  let html = '<ul>'
  for (let asset of assets) {
    html += '<li>' + asset.id + '</li>'
  }
  html += '</ul>'
  document.body.innerHTML = html
}

async function fetchAndPrintFacts() {
  try {
    const assets = await fetchFacts();
    printFacts(assets);
  } catch (err) {
    console.log(err);
  }
}

fetchAndPrintFacts()

fetchFacts()
  .then((assets) => {
    console.log(assets)
  })
  .catch((err) => {
    console.log(err)
  })
