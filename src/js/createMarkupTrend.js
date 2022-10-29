export function createMarkupTrend(film) {
    return film.map(({ poster_path, title, genre_ids, release_date, popularity }) => 
        `<li class="film-gallery__item list">
              <a href="http://">
                <img
                  src="${poster_path}"
                  alt="${title}"
                  width="394"
                  height="634"
                />
              </a>
              <div class="film">
                <h2>${title}</h2>
              </div>
              <div class="film__wrapper">
                <p class="${genre_ids}">Drama, Action</p>
                <p class="film__line">|</p>
                <p class="${release_date}">2020</p>
                <p class="${popularity} is-hidden">7.98</p>
              </div>
            </li>`).join('');
}

