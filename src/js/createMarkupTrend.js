export function createMarkupTrend(film) {
  return film.map(({ poster_path, title, genre_ids, release_date, popularity }) => {
    return `<li class="film-gallery__item list">
              <a href="http://">
                <img
                  src='${poster_path}'
                  alt="${title}"
                  width="394"
                  height="634"
                />
              </a>
              <div class="film">
                <h2>${title}</h2>
              </div>
              <div class="film__wrapper">
                <p class="film__genre">${genre_ids}</p>
                <p class="film__line">|</p>
                <p class="film__relise">${release_date}</p>
                <p class="film__rating is-hidden">${popularity}</p>
              </div>
            </li>`}).join('');
}

