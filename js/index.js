function addMoviesToDom(movies, id) {
  // todo remove all node from the dom
  const map = [];
  switch (id) {
    case "latest-movies":
      movies.map((element) => {
        removeMoviesFromTheDom();
        if (element.year >= "2014") {
          map.push({
            src: element.poster,
          });
        }
      });
      break;
    case "avengers":
      movies.map((element) => {
        removeMoviesFromTheDom();
        let title = element.title.toLowerCase();
        if (title.includes("avengers")) {
          map.push({
            src: element.poster,
          });
        }
      });
      break;
    case "x-men":
      movies.map((element) => {
        removeMoviesFromTheDom();
        let title = element.title.toLowerCase();
        if (title.includes("x-men")) {
          map.push({
            src: element.poster,
          });
        }
      });
      break;
    case "princess-movies":
      movies.map((element) => {
        removeMoviesFromTheDom();
        let title = element.title.toLowerCase();
        if (title.includes("princess")) {
          map.push({
            src: element.poster,
          });
        }
      });
      break;
    case "batman":
      movies.map((element) => {
        removeMoviesFromTheDom();
        let title = element.title.toLowerCase();
        if (title.includes("batman")) {
          map.push({
            src: element.poster,
          });
        }
      });
      break;
    default:
      movies.map((element) => {
        removeMoviesFromTheDom();
        map.push({
          src: element.poster,
        });
      });
  }

  map.forEach((element) => {
    const node = document.createElement("li");
    const poster = document.createElement("img");
    poster.src = element.src;
    node.className = "movie";
    movieList.appendChild(node);
    node.appendChild(poster);
  });
}

// const selectedRadioBtn = document.querySelector('input[name="nav"]:checked').id;
const selectedRadioBtn = document.querySelectorAll('input[name="nav"]');
selectedRadioBtn.forEach((element) => {
  element.addEventListener("click", (getSelectedRadiobtn) => {
    console.log(element.id);
    addMoviesToDom(movies, element.id);
  });
});

function removeMoviesFromTheDom() {
  const lstMovie = document.getElementById("movieList");
  lstMovie.childNodes.forEach((element) => {
    console.log(element);
    lstMovie.removeChild(element);
  });
}

addMoviesToDom(movies, "default");
