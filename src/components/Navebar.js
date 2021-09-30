
import { makeStyles } from "@material-ui/core/styles";
import React from 'react'
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
    table: {
      minWidth: 650,
      fontWeight: "bold",
       
    },
   });
const Navebar = () => {
    const classes = useStyles();
    return (
        <div className={classes.navbar}>
            <Link to='/'>
                <h2>Favourite countries</h2>
            </Link>
            <Link to='/cart'>
                <div  className={classes.navbar_cart}>
                <h3  className={classes.cart_title}>Cart</h3>
                <img src="" alt="Shopping cart" />
                <div  className={classes.cart_counter}>1</div>
                </div>
            </Link>
        </div>
    )
}

export default Navebar
