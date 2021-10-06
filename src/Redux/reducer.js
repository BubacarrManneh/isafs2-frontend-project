const defaultState = {
    cart: [],
    countries: [],
    country: {},
    error: null,
}

const reducer = (state = defaultState, action) => {
    switch(action.type){
       
        case 'INSERT_COUNTRY':
            const incomingCountry = action.payload
            const incomingName = incomingCountry.name
            const existCountry = state.cart.find((country) => {
                if(incomingName === country.name){
                    return true
                }
                return false
            })
            if(existCountry){
                return state
            }

            return{
                ...state,
                cart: [...state.cart, incomingCountry]
            }
        case 'REMOVE_COUNTRY':
            return{
                ...state,
                cart: [{countryName: 'Netherlands'}]
            }
        case 'FETCH_COUNTRIES_SUCCESS':
            const countriesPayload = action.payload
            return {
                ...state,
                  countries: countriesPayload,
            }
        case 'FETCH_ONE_COUNTRY_SUCCESS':
            const countryData = action.payload[0]
            return {
                ...state,
                  country: countryData,
            }
        case 'FETCH_ERROR':
            const errorFromPayload = action.payload
            return {
                ...state,
                  country: errorFromPayload,
            }
        default:
          return state
    }
}

export default reducer;