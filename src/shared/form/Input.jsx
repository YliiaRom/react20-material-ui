import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
function Input({ id, label, hint, error, ...rest }) {
  return (
    <>
      <Typography variant="h5" color="success">
        &lt;TextField color="success"
      </Typography>
      <TextField
        {...rest}
        id={id}
        label={label}
        error={!!error}
        helperText={error || hint}
      />
      {error && <Typography>Error.message: {error}</Typography>}
    </>
  );
}

export default Input;
