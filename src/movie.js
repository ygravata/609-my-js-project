const list = document.querySelector('#results');

const insertMovies = (data) => {
  data.Search.forEach((result) => {
    const movieTag = `<li>
      <img src="${result.Poster}" alt="" height="100"/>
    </li>`;
    list.insertAdjacentHTML('beforeend', movieTag);
  });
};

const fetchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=9e0e6785`)
    .then(response => response.json())
    .then(insertMovies);
};

const updateList = (event) => {
  event.preventDefault();
  list.innerHTML = '';
  const input = document.querySelector('#search-input');
  fetchMovies(input.value);
}

export { fetchMovies, updateList };
