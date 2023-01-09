fetch(
  "https://newsapi.org/v2/everything?q=karachi&apiKey=91f47267d3b94d4d8e6cec6fca0ed5d8"
)
  .then((res) => res.json())
  .then((res) => {
    heading_one.innerHTML = `${res.articles[0].title}`;
    description_one.innerHTML = `${res.articles[0].description}`;
    const admin = res.articles[0].urlToImage;
    news_img_one.innerHTML = `<img src="${admin}"/>`;
    const sourceurl = res.articles[0].url;
    Source.innerHTML = `<a href="${sourceurl}" class="btn btn-dark" target="_blank" >View Source</a>`;
    Published.innerHTML = `<b>Published At : ${res.articles[0].publishedAt}</b>`;

    heading_two.innerHTML = `${res.articles[1].title}`;
    description_two.innerHTML = `${res.articles[1].description}`;
    const admin_2 = res.articles[1].urlToImage;
    news_img_two.innerHTML = `<img src="${admin_2}"/>`;
    const sourceurl_2 = res.articles[1].url;
    Source_2.innerHTML = `<a href="${sourceurl_2}" class="btn btn-dark" target="_blank" >View Source</a>`;
    Published_2.innerHTML = `<b>Published At : ${res.articles[1].publishedAt}</b>`;

    heading_three.innerHTML = `${res.articles[2].title}`;
    description_three.innerHTML = `${res.articles[2].description}`;
    const admin_3 = res.articles[2].urlToImage;
    news_img_three.innerHTML = `<img src="${admin_3}"/>`;
    const sourceurl_3 = res.articles[2].url;
    Source_3.innerHTML = `<a href="${sourceurl_3}" class="btn btn-dark" target="_blank" >View Source</a>`;
    Published_3.innerHTML = `<b>Published At : ${res.articles[2].publishedAt}</b>`;

    heading_four.innerHTML = `${res.articles[3].title}`;
    description_four.innerHTML = `${res.articles[3].description}`;
    const admin_4 = res.articles[3].urlToImage;
    news_img_four.innerHTML = `<img src="${admin_4}"/>`;
    const sourceurl_4 = res.articles[3].url;
    Source_4.innerHTML = `<a href="${sourceurl_4}" class="btn btn-dark" target="_blank" >View Source</a>`;
    Published_4.innerHTML = `<b>Published At : ${res.articles[3].publishedAt}</b>`;
  });
