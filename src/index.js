import './css/styles.css';
import { fetchCountries } from "./js/fetchCountries";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;
const inputRef = document.querySelector("#search-box")

Notify.init({
    timeout: 2000,
    clickToClose: true,
  });

const refs = {
    ulRef: document.querySelector(".country-list"),
    divRef: document.querySelector(".country-info")
}


// inputRef.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY))
inputRef.addEventListener('input', onSearch)

function onSearch(e) {
    let inputFilter = e.currentTarget.value.trim();
    if (inputFilter === '') {
        return
    }
    console.log(e.currentTarget.value);
    onFilterCountries(fetchCountries(inputFilter))

}

function onFilterCountries(arrayCountries) {
    if (arrayCountries.length > 10) {
        Notify.info(`❌ Too many matches found. Please enter a more specific name.`)
    } else if (arrayCountries.length > 2 && arrayCountries.length <= 10) {
        onMurkupCountries(arrayCountries)
    } else{
        onMurkupOneCountrie(countrie)
    }
}

function onMurkupCountries(countries) {
    
}

function onMurkupOneCountrie(countrie) {
    
}
