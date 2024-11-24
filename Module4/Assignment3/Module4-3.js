document.getElementById("search").onsubmit = function (event) {
    event.preventDefault();
    const query = document.getElementById("query").value;
    const resultsDiv = document.getElementById("results");

    resultsDiv.innerHTML = '';

    fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            data.forEach(tvShow => {
                const show = tvShow.show;

                const article = document.createElement("article");

                const h2 = document.createElement("h2");
                const link = document.createElement("a");
                link.href = show.url;
                link.target = "_blank";
                link.textContent = show.name;
                h2.appendChild(link);
                article.appendChild(h2);

                if (show.image?.medium) {
                    const img = document.createElement("img");
                    img.src = show.image.medium;
                    img.alt = `${show.name} Poster`;
                    article.appendChild(img);
                }

                if (show.summary) {
                    const summaryDiv = document.createElement("div");
                    summaryDiv.innerHTML = show.summary;
                    article.appendChild(summaryDiv);
                }

                resultsDiv.appendChild(article);
            });
        })
        .catch(error => console.error("Error:", error));
};
