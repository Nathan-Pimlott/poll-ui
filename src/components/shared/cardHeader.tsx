import { useNavigate } from "react-router";
import { Container, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function CardHeader() {
  const navigate = useNavigate();

  return (
    <Container id="header-container">
      <IconButton
        id="back-button"
        onClick={() => {
          navigate("/");
        }}
      >
        <ArrowBackIcon id="back-button-icon" />
      </IconButton>
      <Typography id="header-text" variant="h4" textAlign="center">
        Poll
      </Typography>
      <div id="header-placeholder" />
    </Container>
  );
}
