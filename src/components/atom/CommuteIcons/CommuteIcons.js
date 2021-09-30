import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';
import TrainOutlinedIcon from '@material-ui/icons/TrainOutlined';
import DirectionsBikeOutlinedIcon from '@material-ui/icons/DirectionsBikeOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 24,
        height: 24,
    },
    iconUnselected: {
        color: theme.palette.secondary.main,
    },
    iconSelected: {
        color: theme.palette.primary.contrastText,
    },
    avatarSelected: {
        background: theme.palette.primary.main,
    },
    avatarUnselected: {
        background: "transparent",
    },

}));

const CommuteIcons = (props) => {
    const classes = useStyles();
    const { type, selected, onClick} = props;
    let iconColor = selected ? classes["iconSelected"] : classes["iconUnselected"];
    let avatarColor = selected ? classes["avatarSelected"] : classes["avatarUnselected"];

    return (
        <div>
         <Avatar className={avatarColor} onClick={()=> {onClick(type)}}>
            {
                type === "metro" ?
                    <TrainOutlinedIcon className={`${classes.root} ${iconColor}`} 
                    data-testid="metro" /> :
                type === "bus" ?
                    <DirectionsBusIcon className={`${classes.root} ${iconColor}`} 
                    data-testid="bus" /> :
                type === "car" ?    
                    <DriveEtaOutlinedIcon className={`${classes.root} ${iconColor}`} 
                    data-testid="car"/> :
                    <DirectionsBikeOutlinedIcon className={`${classes.root} ${iconColor}`} 
                    data-testid="bike" /> 
                }
         </Avatar>
        </div>
    )
};

CommuteIcons.propTypes = {
    type: PropTypes.oneOf(["metro","bus","car","bike"]),
    selected: PropTypes.bool,
    onClick : PropTypes.func
}

export default CommuteIcons;