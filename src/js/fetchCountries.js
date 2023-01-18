
export function fetchCountries(inputFilter) {
    const URL_COUNTRIES = 'https://restcountries.com/v3.1/name/'
    return fetch(`${URL_COUNTRIES}${inputFilter}?fields=name,capital,population,flags,languages`).then(response => {
    if (response.status === 404) {
        return Promise.reject(new Error());
      }
      return response.json();
    }
    ).then(data => data)

//    peru   

}

