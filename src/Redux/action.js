export const addToCart =  countryAdd => {
    return{
        type: "INSERT_COUNTRY",
        payload: countryAdd,
    }
   
}
export const removeFromCart = countryName => {
    return{
        type: "REMOVE_COUNTRY",
        payload: countryName,
    }
    
}
export const getCountries = () => {
    return async (dispatch, getState) => {
        try {
            const data = await fetch("https://restcountries.com/v2/all");
            const countriesList = await data.json();
            console.log("Countries", countriesList);
            dispatch(fetchCountriesSuccess(countriesList));
        } catch (error) {
          console.log(error);
          dispatch(fetchError(error))
        }
        
    }
    
}

export const fetchCountriesSuccess = data => {
    return {
        type: 'FETCH_COUNTRIES_SUCCESS',
        payload: data,
    }
}

export const getOneCountry = countryName => {
    return async(dispatch, getState) => {
        try{
            const data = await fetch(
              `https://restcountries.com/v2/name/${countryName}`
            );
            const country = data.json();
            console.log('oneCountry', country)
            dispatch(fetchOneCountrySuccess(country));
        }catch(error){
             console.log(error);
             dispatch(fetchError(error));
        }
    
    }
}

export const fetchOneCountrySuccess = data => {
  return {
    type: "FETCH_ONE_COUNTRY_SUCCESS",
    payload: data,
    }
}
export const fetchError = error => {
  return {
    type: "FETCH_ERROR",
    payload: error,
    }
}
