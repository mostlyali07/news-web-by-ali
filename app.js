// fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=91f47267d3b94d4d8e6cec6fca0ed5d8")
//   .then((response) => response.json())
//   .then((json) => {
//     let news = document.getElementById("breaking-news");
//     for (var i = 0; i < json.length; i++) {
//         news.innerHTML += `<h2>${json[i].title}</h2>`;
//     }
//   });



// api url
const api_url =
  "https://newsapi.org/v2/everything?q=keyword&apiKey=91f47267d3b94d4d8e6cec6fca0ed5d8";

// Defining async function
async function getapi(url) {

  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
  show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
  document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
  let tab =
    `<tr>
    <th>Name</th>
    <th>Office</th>
    <th>Position</th>
    <th>Salary</th>
   </tr>`;

  // Loop to access all rows 
  for (let r of data.list) {
    tab += `<tr> 
<td>${r.name} </td>
<td>${r.office}</td>
<td>${r.position}</td> 
<td>${r.salary}</td>          
</tr>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById("employees").innerHTML = tab;
}