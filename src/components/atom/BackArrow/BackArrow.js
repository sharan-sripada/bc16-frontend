import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
    backButton: {
        display: 'flex',
        alignItems: 'center',
        cursor: "pointer"
    },
    backIcon: {
        color: theme.palette.secondary.main,
        paddingRight: theme.spacing(2),
        fontSize: theme.typography.h5.fontSize,
    },
    buttonLabel:{
        color: theme.palette.secondary.main,
        fontFamily: theme.typography.h5.fontFamily,
        fontWeight: theme.typography.h5.fontWeight,
        fontSize: theme.typography.h5.fontSize,
    }
}));

const ArrowBackComponent = (props)=>{
    const classes = useStyle();
    return (
        <div className={classes.backButton} onClick={props.onClick}>
            <ArrowBackIcon className={classes.backIcon} data-testid="arrow-icon" />
            <span className={classes.buttonLabel} data-testid="arrow-label">{props.label}</span>
        </div>
    )
}
export default ArrowBackComponent;