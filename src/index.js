import './css/styles.css';
import { fetchCountries } from "./js/fetchCountries";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

Notify.init({
    timeout: 2000,
    clickToClose: true,
  });

const refs = {
    inputRef: document.querySelector("#search-box"),
    countryList: document.querySelector(".country-list"),
    countryInfo: document.querySelector(".country-info")
}

refs.inputRef.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY))

function onSearch(e) {
    let inputFilter = e.target.value.trim();
    if (inputFilter === '') {
        inpitClear()
        return
    }
    fetchCountries(inputFilter).then(onFilterCountries);
}

function onFilterCountries(arrayCountries) {
    inpitClear()
    
    if (arrayCountries.length > 10) {
        Notify.info(`Too many matches found. Please enter a more specific name.`)
    } else if (arrayCountries.length > 2 && arrayCountries.length <= 10) {
        arrayCountries.forEach((objectCountries) => {
            onMurkupCountries(objectCountries)
        })
    } else if (arrayCountries.length === 1) {
        onMurkupCountrieInfo(arrayCountries)
    } else{
        Notify.failure(`❌ Oops, there is no country with that name`)
    }
}

function onMurkupCountries({flags, name}) {
    refs.countryList.insertAdjacentHTML('beforeend', `<li class="countrys-li">
    <img src="${flags.svg}" alt="${name.official}" width="60" height="40">
    <span class="country-name">${name.official}</span></li>`)
}

function onMurkupCountrieInfo(arrayCountries) {
    arrayCountries.map(({name, flags, capital, population, languages}) => 
        refs.countryInfo.innerHTML = `<p class="country-name">
        <img src="${flags.svg}" alt="${name.official}" width="60" height="40">
        <span><b>${name.official}</b></span></p>
        <ul class="country-ul">
          <li class="country-ul"><b>Capital:</b><span>${capital}</span></li>
          <li class="country-ul"><b>Population:</b><span>${population}</span></li>
          <li class="country-ul"><b>Languages:</b><span>${Object.values(languages)}</span></li>
        </ul>`);

}

function inpitClear() {
    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = '';
}
