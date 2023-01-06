fetch('https://newsapi.org/v2/everything?q=karachi&apiKey=91f47267d3b94d4d8e6cec6fca0ed5d8')
  .then((res) => res.json())
  .then((res) => {
    heading_one.innerHTML = `${res.articles[0].title}`;
    description_one.innerHTML = `${res.articles[0].description}`;
  });