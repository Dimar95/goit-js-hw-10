
export function fetchCountries(inputFilter) {
    const URL_COUNTRIES = 'https://restcountries.com/v3.1/name/'
    return fetch(`${URL_COUNTRIES}${inputFilter}?fields=name,capital,population,flags,languages`).then(response => response.json()).then(data => data)

//    peru   

}