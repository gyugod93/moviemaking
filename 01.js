// const $titleContainer = document.getElementById('title-container');

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGI0NTQzM2JhMjdiMGNjYjE1MGVkZDdjZDNjZmIzMiIsInN1YiI6IjY1MmYxYTJhZWE4NGM3MDBjYTEyOWFmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KbD2nn2GLSvG2DejPMMTF63XUXkuBKVU5KwAMXh3AdQ'
//   }
// };

// async function data() {
//   const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
//   const data1 = await res.json();
//   return data1.results;
// }

// const movieData = await data();
// console.log(movieData);

// let addHtml = '';
// movieData.forEach(movie => {
//   addHtml +=
//     `
// <div class="movie-card" id="${movie.id}">
// <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}">
// <h1>제목 : ${movie.title}</h1>
// <p>overview : ${movie.overview} </p>
// <p>vote_average : ${movie.vote_average} </p>
// </div>
// `
// });

// $titleContainer.innerHTML = addHtml;

const $titleContainer = document.getElementById('title-container');

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGI0NTQzM2JhMjdiMGNjYjE1MGVkZDdjZDNjZmIzMiIsInN1YiI6IjY1MmYxYTJhZWE4NGM3MDBjYTEyOWFmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KbD2nn2GLSvG2DejPMMTF63XUXkuBKVU5KwAMXh3AdQ'
  }
};

async function data() {
  const res = await fetch(
    'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
    options);
  const data1 = await res.json();
  return data1.results;
}

// ==================상자====================
async function searchMovies(keyword = '') {
  const movieData = await data();
  let addHtml = '';
  const filterMovies = movieData.filter(function (movie) {
    return movie.title.toLowerCase().includes(keyword.toLowerCase());
  })

  filterMovies.forEach(movie => {
    addHtml +=
      `
<div class="movie-card" id="${movie.id}" onclick="addEventBtn(this, ${movie.id})">
<img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}">
<h1>제목 : ${movie.title}</h1>
<p class ="overview">overview : ${movie.overview} </p>
<p>vote_average : ${movie.vote_average} </p>
</div>
`
  });
  $titleContainer.innerHTML = addHtml;

}

// ==================상자====================
searchMovies();

window.addEventBtn = (event, id) => {
  alert(`영화 id : ${id}`);
}

const $searchForm = document.querySelector('#search_form');
$searchForm.addEventListener('submit', function (event) {
  event.preventDefault();
  // input object
  const searchInput = document.querySelector('#searchInput');
  searchMovies(searchInput.value);
});

