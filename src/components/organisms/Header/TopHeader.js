import React from 'react';
import PropTypes from 'prop-types';
import Location  from '../../atom/Location/Location';
import { Avatar, makeStyles } from "@material-ui/core";
import theme from '../../../utils/theme/theme';
import Grid from '@material-ui/core/Grid';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        color: theme.palette.secondary.main,
        width: "20px",
        height: "80px",
    },
    label: {
        fontSize: theme.typography.navtabs.fontSize,
        paddingLeft: "10px",
        position: "relative",
    },
    avatarMargin: {
        marginLeft: "10px",
    }
});

const TopHeader = (props) => {
    const { locationLabel, profileName,icon,profile } = props;
    const classes = useStyles();

    return (

        <Grid container alignItems="center" justify="space-between" data-testid="topheader-placeholder">
            <Grid item xs={3}>
                <Location icon={icon} label={locationLabel} />
            </Grid>
            <Grid item container xs={3} alignItems="center" justify="space-evenly">
                <MessageOutlinedIcon className={classes.root} />
                <NotificationsNoneOutlinedIcon className={classes.root} />
                <Avatar className={classes.avatarMargin} src={profile}></Avatar>
                <Typography variant="body1" className={classes.label} >{profileName}</Typography>
                <ExpandMoreIcon className={classes.root} />
            </Grid>
        </Grid>
    );
};

TopHeader.propTypes = {
    locationLabel: PropTypes.string,
    profileName: PropTypes.string,
}
	
export default TopHeader;   