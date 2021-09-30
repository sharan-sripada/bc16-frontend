import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  primary: {
    width: "80px",
    height: "80px",
    marginBottom: "20%",
  },
  secondary: {
    width: "50px",
    height: "50px",
  },
}));

function CompanyLogo(props) {
  const { alt, source, isGrid, ...rest } = props;
  const classes = useStyles();
  let imgStyle = isGrid ? classes.primary : classes.secondary;

  return (
    <>
      <Avatar className={imgStyle} alt={alt} src={source} {...rest} />
    </>
  );
}

CompanyLogo.propTypes = {
  alt: PropTypes.string,
  source: PropTypes.string,
};

export default CompanyLogo;
