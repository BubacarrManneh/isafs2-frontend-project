// This hook is used to fetch all 
import {useState, useEffect} from 'react'
const useCountries = (url) => {
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState('');
    if(error){
        console.log("Error; countries data could not be fetched", error)
      }

    useEffect(() => {
        
        const fetchData = async () => {
            try{
                const result = await fetch(url);
                const data = await result.json();
                setCountries(data);
            }catch(error){
                console.log(error)
                setError(error);
            }
        
        }
        fetchData();
    }, [url])
    return ( 
        [error, countries]
     );
}
 
export default useCountries;
