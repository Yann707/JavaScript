document.getElementById("search").onsubmit = function (event) {
    event.preventDefault();
    const query = document.getElementById("query").value; // Get the input value

    fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error("Error:", error));
};
