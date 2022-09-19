fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=91f47267d3b94d4d8e6cec6fca0ed5d8")
  .then((res) => res.json())
  .then((json) => {
    let news = document.getElementById("breaking-news");
        news.innerHTML += `<h2>${json.source}</h2>`;
  });


  