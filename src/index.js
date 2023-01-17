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
    countryList: document.querySelector(".country-list"),
    countryInfo: document.querySelector(".country-info")
}


// inputRef.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY))
inputRef.addEventListener('input', onSearch)

function onSearch(e) {
    let inputFilter = e.currentTarget.value.trim();
    if (inputFilter === '') {
    refs.countryList.innerHTML = '';
        return
    }
    console.log(e.currentTarget.value);
    fetchCountries(inputFilter).then(onFilterCountries);
    // onFilterCountries(arrayCountries)
    

}

function onFilterCountries(arrayCountries) {
    console.log(arrayCountries)
    refs.countryList.innerHTML = '';
    
    if (arrayCountries.length > 10) {
        Notify.info(`❌ Too many matches found. Please enter a more specific name.`)
    } else if (arrayCountries.length > 2 && arrayCountries.length <= 10) {
        const array = arrayCountries.forEach((objectCountries) => {
            onMurkupCountries(objectCountries)
        })
    } else{
        onMurkupOneCountrie(arrayCountries)
    }
}

function onMurkupCountries({flags, name}) {

    refs.countryList.insertAdjacentHTML('beforeend', `<li class="country-li"><img src="${flags.svg}" alt="${name.official}" width="60" height="40"><span class="country-name">${name.official}</span></li>`)
}

function onMurkupOneCountrie(arrayCountries) {
    const countrie = arrayCountries.map(oneCountrie => oneCountrie);
    console.log(countrie)

    // console.log(flags, name, capital, population, languages)
    
}


{/* <p><img src="${flags.svg}" alt="${name.official}">${name.official}</p>
<ul>
  <li><b>Capital:</b><span>${capital}</span></li>
  <li><b>Population:</b><span>${population}</span></li>
  <li><b>Languages:</b><span>${languages}</span></li>
</ul> */}