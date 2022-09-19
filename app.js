// fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=91f47267d3b94d4d8e6cec6fca0ed5d8`)
// .then((name) => name.json())
// .then((name) => {
//     daTa(name)
// }).catch((err) => {
//     console.log(err)
// })

// function daTa(name) {
//     let breaKingNews = document.querySelector('breaking-news');
//     breaKingNews += `<h1>${name.title}</h1>`;
// }
// daTa(name);


fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=91f47267d3b94d4d8e6cec6fca0ed5d8")
  .then((res) => res.json())
  .then((json) => {
    let list = document.getElementById("breaking-news");
    for (var i = 0; i < json.length; i++) {
        list.innerHTML += `<h1>${json.urlToImage}</h1>`;
    }
  });