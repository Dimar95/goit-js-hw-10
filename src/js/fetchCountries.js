
export function fetchCountries(inputFilter) {

    const URL_COUNTRIES = 'https://restcountries.com/v3.1/name/'

    console.log(`${URL_COUNTRIES}${inputFilter}?name.official,capital,population,flags.svg,languages`);

    return fetch(`${URL_COUNTRIES}${inputFilter}?fields=name.official,capital,population,flags,languages`).then(response => response.json()).then(countries => console.log(countries))

    
//    peru   

}