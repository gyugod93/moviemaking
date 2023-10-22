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
<div class="movie-card" id="${movie.id}">
<img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}">
<h1>제목 : ${movie.title}</h1>
<p>overview : ${movie.overview} </p>
<p>vote_average : ${movie.vote_average} </p>
</div>
`
});

$titleContainer.innerHTML = addHtml;

//css

function handleSearch(event) {
  event.preventDefault(); // 폼 제출 방지

  // 검색어를 입력란에서 가져오고 소문자로 변환
  const searchText = document.getElementById("searchInput").value.toLowerCase();

  // 영화 목록을 가져오거나 동적으로 생성할 수 있습니다.
  const movieList = document.getElementById("movieList").getElementsByTagName("li"); //?????

  for (let i = 0; i < movieList.length; i++) {
      const movieTitle = movieList[i].textContent.toLowerCase();

      // 대소문자 구분 없이 검색어와 영화 제목을 비교
      if (movieTitle.includes(searchText)) {
          movieList[i].style.display = "block";
      } else {
          movieList[i].style.display = "none";
      }
  }
}