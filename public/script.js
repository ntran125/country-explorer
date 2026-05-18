document.getElementById("searchButton").addEventListener("click", async function () {
    const country = document.getElementById("countryInput").value;
    const result = document.getElementById("result");

    result.innerHTML = "Loading...";

    try {
        const response = await fetch("/api/country/" + country);
        const data = await response.json();

        if (data.error) {
            result.innerHTML = "Country not found.";
            return;
        }

        result.innerHTML = `
            <h2>${data.name.common}</h2>
            <img src="${data.flags.png}" width="200">
            <p><strong>Capital:</strong> ${data.capital[0]}</p>
            <p><strong>Population:</strong> ${data.population}</p>
            <p><strong>Region:</strong> ${data.region}</p>
        `;

    } catch (error) {
        result.innerHTML = "Error loading country.";
    }
});