import React from "react";
import { Grid, TextField } from "@material-ui/core";

const BaseIconInputField = (props) => {
  const { variant, placeholder, icon, classes, onChange, defaultValue } = props;

  return (
    <Grid container>
      <Grid item>{icon}</Grid>
      <Grid>
        <TextField
          placeholder={placeholder}
          color={variant}
          className={classes.text}
          InputProps={{ disableUnderline: true }}
          onChange={onChange}
          defaultValue={defaultValue}
        />
      </Grid>
    </Grid>
  );
};

export default BaseIconInputField;
