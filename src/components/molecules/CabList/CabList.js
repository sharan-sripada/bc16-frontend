import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    root:{
        paddingTop:"10px",
        marginTop:"10px"
    },

    title: {
        color: theme.typography.h3.color,
        textAlign: "left",
        paddingLeft:"10px",
    },
    fare: {
        textAlign: "left",
        paddingLeft:"10px"
    },
    book: {
        color: theme.palette.primary.main,  
        cursor: "pointer"
    },
    img: {
        marginRight: "10px",
        height: "42px",
        width: "42px",
    },
}));

const CabList = (props) => {
    const classes = useStyles();

    return (
        <Grid container spacing={1} direction="column" justify="center" 
        className={classes.root} data-testid="cablist-placeholder">
           {options.map((item) => {
                return (
                    <Grid item>
                    <Grid container direction="row" alignItems="center" key={item.type}>
                        <img className={classes.img} src={item.url} alt={item.type}></img>
                        <Grid item container xs={7} direction="column" justify="center">
                            <Typography variant="h5" className={classes.title}>{item.type}</Typography>
                            <Typography variant="body2" className={classes.fare}>Approx {item.value}</Typography>
                        </Grid>
                         <Typography variant="h5" className={classes.book}>Book now</Typography>
                    </Grid>
                    </Grid>
                );
            })}

       </Grid>
    );
}
export const options = [
    { 
        type: "Ola", 
        value: "$40", 
        url: "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1459446250/xx0u5xwwzygivm67ogsk.jpg" 
    },
    { 
        type: "Uber", 
        value: "$40", 
        url: "https://semaine-production.s3.amazonaws.com/products/product/image/6827/large_Uber-app.jpg" 
    }
]

CabList.propTypes = {
    options: PropTypes.array,
}

export default CabList;