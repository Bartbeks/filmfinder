function addMoviesToDom(movies) {
  movies.forEach((element) => {
    const movieList = document.getElementById("movieList");
    const node = document.createElement("li");
    node.className = "movie";
    const link = document.createElement("a");
    const url = "https://www.imdb.com/title/";
    link.href = url + element.imdbID;
    link.target = "_blank";
    const poster = document.createElement("img");
    poster.src = element.poster;
    link.appendChild(poster);
    node.appendChild(link);
    movieList.appendChild(node);
  });
}

const movieFilter = (id) => {
  switch (id) {
    case "latest-movies":
      const filteredMovies = movies.filter((movie) => {
        return movie.year >= "2014";
      });
      removeMoviesFromTheDom();
      addMoviesToDom(filteredMovies);
      break;
    case "avengers":
      const avengerMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().includes("avengers");
      });

      addMoviesToDom(avengerMovies);
      break;
    case "x-men":
      const xMenMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().includes("x-men");
      });

      addMoviesToDom(xMenMovies);
      break;
    case "princess-movies":
      const princessdMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().includes("princess");
      });

      addMoviesToDom(princessdMovies);
      break;

    case "batman":
      const BatmanMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().includes("batman");
      });
      addMoviesToDom(BatmanMovies);
    case "search":
      const searchValue = document.querySelector("#search");
      let searchFor = searchValue.value.toLowerCase();
      const searchResult = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(searchFor);
      });

      addMoviesToDom(searchResult);
      break;
    default:
      addMoviesToDom(movies);
  }
};
const selectedRadioBtn = document.querySelectorAll('input[name="nav"]');
selectedRadioBtn.forEach((radioBtn) => {
  radioBtn.addEventListener("click", (getSelectedRadiobtn) => {
    removeMoviesFromTheDom();
    movieFilter(radioBtn.id);
  });
});

const searchBtn = document.querySelector("#searchBtn");
const searchValue = document.querySelector("#search");
searchBtn.addEventListener("click", (getSearchValue) => {
  removeMoviesFromTheDom();
  movieFilter("search");
});

function removeMoviesFromTheDom() {
  const lstMovie = document.getElementById("movieList");

  while (lstMovie.firstChild) {
    lstMovie.removeChild(lstMovie.firstChild);
  }
}
addMoviesToDom(movies);
