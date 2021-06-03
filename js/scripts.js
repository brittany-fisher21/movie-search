"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const chuckQuote = document.querySelector("#chuckQuote");
    const quoteButton = document.querySelector("#getQuote");
    const defaultCategory = "dev";
    let currentCategory = defaultCategory;


    function fetchTheQuote(category) {
        const fetchRequest = fetch(`https://api.themoviedb.org/3/movie/550?api_key=5311b4b960fbf4fe8c4a8101c5cad6ef`).then(function (response) {
            console.log("Fetch Request", fetchRequest);
            return response.json();
        }).then(function (data) {
            updateQuote(data);
        });
    }
    function fetchTheCategories() {
        fetch("https://api.themoviedb.org/3/movie/550?api_key=5311b4b960fbf4fe8c4a8101c5cad6ef")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log("category data is: ", data);
                updateCategories(data);
            });
    });