import * as API from './API';
import { createMarkupTrend } from './createMarkupTrend';

const refs = {
  trend: document.querySelector('film-gallery__list'),
};


async function getTrending() {
  try {
    const movies = await API.getMovie();
    const { results } = movies;
    console.log(results);
    console.log(results[0].title);
    console.log(results[0].poster_path);
    refs.trend.insertAdjacentHTML('beforeend', createMarkupTrend(results));
    const genre = results.forEach(element => {
      element.genre_ids;
    });
  } catch (error) {
    console.log(error);
  }
}

getTrending();


