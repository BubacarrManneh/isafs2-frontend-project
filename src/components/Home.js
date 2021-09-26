import { makeStyles } from "@material-ui/core/styles";
import useCountries from '../custom-hooks/useCountries'

const useStyles = makeStyles({
  flag: {
    width: "30rem",
  },
 });
const Home = () => {
  const classes = useStyles();
  const {countries, error} = useCountries("https://restcountries-v2.herokuapp.com/all");
  if(error){
    console.log("Error; countries data could not be fetched", error)
  }
  return (
    <div>
      {countries.map(country => {
        return <>
        <h2>Name :{country.name}</h2>
        <img className={classes.flag} src={country.flag} alt={country.flag} />
        <p>Region: {country.region}</p>
        <p>Population: {country.population}</p>
        <p>Languages: {country.languages[0].name}</p>
        </>
      })}
    </div>
	)
}
 
export default Home;