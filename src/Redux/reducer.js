const defaultState = {
    cart: [],
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
            const removeCountry = action.payload
            const removeName = removeCountry.name
            const removedCountry = state.cart.filter((country) => {
                return removeName !== country.name
            })
            if(removedCountry){
                return state
            }
            return{
                ...state,
                cart: [...state.cart, []]
            }
            default:
                return state
    }
}

export default reducer;