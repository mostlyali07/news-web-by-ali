// var data=""
// fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=91f47267d3b94d4d8e6cec6fca0ed5d8")
//   .then((response) => response.json())
//   .then((json) => {
//     let news = document.getElementById("breaking-news");
//     for (var i = 0; i < json.length; i++) {
//         news.innerHTML += `<h2>${json[i].title}</h2>`;
//     }
//    console.log(data)
//   });

async function ali() {
    const data = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=b42b1aac1910568ed886ad0b10a6b06b&units=metric"
    );
    const jsonRes = await data.json();
  
    return jsonRes;
  }
  
  ali()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
  
  const getData = new Promise((resolve, reject) => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=b42b1aac1910568ed886ad0b10a6b06b&units=metric"
    )
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
  
  getData.then((res) => console.log(res));
  
  async function abc() {
    try {
      let data = await getData;
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  abc();

  