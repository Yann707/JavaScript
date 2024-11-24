document.querySelector("form").onsubmit = function (event) {
    event.preventDefault();
    const query = document.querySelector("input").value;

    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then(res => res.json())
        .then(console.log)
        .catch(console.error);
};
