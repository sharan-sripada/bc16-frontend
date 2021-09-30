import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

const COLOR_Iceberg = '#e3f3f6';

const useStyles = makeStyles((theme)=>({
    container: {
        maxWidth: "330px",
        height: "50px",
        margin: "15px 0px",
        position: "relative",
        borderRadius: "10px",
        background: COLOR_Iceberg,
    },
    destination: {
        maxWidth: "330px",
        height: "50px",
        position: "relative",
        borderRadius: "10px",
        background: COLOR_Iceberg,
    },
    location: {
        display: "flex",
        transform: "translateY(-50%)",
        position: "absolute",
        top: "50%",
    },
    icon: {
        marginTop: "-3px",
        marginLeft: "8px",
        color: theme.typography.subtitle1.color,
    },
    text: {
        marginLeft: "10px",
    },
    closeIcon: {
        position: "relative",
        right:"-20px",
    }

}));

const Routes = (props) => {
    const classes = useStyles();
    const { from, to }=props;
    return (
        <Grid container direction="column" data-testid="Routes-placeholder">
            <img src="https://i.stack.imgur.com/8kOXQ.jpg" alt="Commute Map" width="330px" height="135px"></img>
            <Grid container className={classes.container} >
                <Grid item className={classes.location}>
                    <FiberManualRecordIcon className={classes.icon} />
                    <Typography variant="body1" className={classes.text}>{from}</Typography>
                    <CloseOutlinedIcon className={`${classes.icon} ${classes.closeIcon}`}/>
                </Grid>
            </Grid>
            <Grid container className={classes.destination}>
                <Grid item className={classes.location}>
                    <RoomOutlinedIcon className={classes.icon} />
                    <Typography variant="body1" className={classes.text}>{to}</Typography>
                </Grid>
            </Grid>
        </Grid >

    );
}

Routes.propTypes = {
    from: PropTypes.string,
    to: PropTypes.string,
}

export default Routes;