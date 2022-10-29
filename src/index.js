
import * as API from './js/API';
import { createMarkupTrend } from './js/createMarkupTrend';


const refs = {
  trend: document.querySelector('.film-gallery__list'),
};

async function getTrending() {
  try {
    const { results } = await API.getMovie();
    console.log(results);
    const markup = createMarkupTrend(results);
    // console.log(markup);
    refs.trend.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
  }
}

getTrending();


