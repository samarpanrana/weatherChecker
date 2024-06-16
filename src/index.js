import './style.css';
import { fetchData , values, fetchImage} from './api';
import { render , toggleLoading} from './dom';

// QUERY SELECTORS FOR DOM 
let searchInput = document.querySelector('#search');
let searchButton = document.querySelector('#searchButton');
let searchValue = '';

// EVENT LISTENER WHEN USER INPUTS 
searchInput.addEventListener("search", (e) => {
    searchButton.click();
})

searchButton.addEventListener("click", async (e) => {
    searchValue = searchInput.value;
    toggleLoading();
    await fetchData(searchValue);
    await fetchImage(searchValue);
    render();
    toggleLoading();

});

// RENDER ON DEFAULT 
(async function () {
    toggleLoading();
    await fetchData('Kathmandu');
    await fetchImage('Kathmandu');
    render();
    toggleLoading();
})();