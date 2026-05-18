const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/api/country/:name", async (req, res) => {
    try {
        const countryName = req.params.name;

        const response = await fetch(
            `https://restcountries.com/v3.1/name/${countryName}`
        );

        const data = await response.json();

        res.json(data[0]);

    } catch (error) {
        res.json({ error: "Country not found" });
    }
});

app.listen(3000, () => {
    console.log("Server Running");
});