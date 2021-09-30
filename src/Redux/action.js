export const addToCart =  country => {
    return{
        type: "INSERT_COUNTRY",
        payload: country,
    }
   
}
export const removeFromCart = countryName => {
    return{
        type: "REMOVE_COUNTRY",
        payload: countryName,
    }
    
}