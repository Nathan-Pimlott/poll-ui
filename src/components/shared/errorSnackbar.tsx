import { Alert, Snackbar } from "@mui/material";

interface IErrorSnackbar {
  message: string;
  open: boolean;
}

export function ErrorSnackbar({ message, open }: IErrorSnackbar) {
  return (
    <Snackbar
      id="error-snackbar"
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={3000}
    >
      <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
