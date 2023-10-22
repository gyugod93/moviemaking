const $titleContainer = document.getElementById('title-container');

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGI0NTQzM2JhMjdiMGNjYjE1MGVkZDdjZDNjZmIzMiIsInN1YiI6IjY1MmYxYTJhZWE4NGM3MDBjYTEyOWFmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KbD2nn2GLSvG2DejPMMTF63XUXkuBKVU5KwAMXh3AdQ'
  }
};

async function data() {
  const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
  const data1 = await res.json();
  return data1.results;
}

const movieData = await data();
console.log(movieData);

let addHtml = '';

movieData.forEach(movie => {
  addHtml +=
    `
<img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}">
<h1>제목 : ${movie.title}</h1>
<p>overview : ${movie.overview} </p>
`
});

$titleContainer.innerHTML = addHtml;