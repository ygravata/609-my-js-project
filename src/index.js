import { fetchMovies, updateList } from "./movie";
import { initSortable } from "./plugins/init_sortable";
import { initMarkdown } from "./plugins/init_markdown";
import { initSelect2 } from "./plugins/init_select2";

fetchMovies('harry potter'); // on 1st page load
initSortable();
initMarkdown();
initSelect2();

const form = document.querySelector('#search-form');
form.addEventListener('submit', updateList);
