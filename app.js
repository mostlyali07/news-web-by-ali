var data=""
fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=91f47267d3b94d4d8e6cec6fca0ed5d8")
  .then((response) => response.json())
  .then((json) => {
    let news = document.getElementById("breaking-news");
    for (var i = 0; i < json.length; i++) {
        news.innerHTML += `<h2>${json[i].title}</h2>`;
    }
   console.log(data)
  });
  