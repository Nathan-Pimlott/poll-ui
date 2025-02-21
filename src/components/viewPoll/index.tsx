import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import {
  Alert,
  Button,
  Card,
  CircularProgress,
  Container,
  Grid2 as Grid,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { addPollVote, getPoll } from "../../services/poll";

export default () => {
  const { pollId } = useParams();
  const navigate = useNavigate();

  const {
    isPending,
    error,
    data: poll,
  } = useQuery({
    queryKey: [`poll-${pollId}`],
    queryFn: async () => {
      return await getPoll(pollId!);
    },
  });

  async function callAddPollVote(optionId: string) {
    try {
      await addPollVote(pollId!, optionId);
      navigate(`/poll/${pollId}/result`);
    } catch (error) {}
  }

  return (
    <Container
      disableGutters
      style={{ backgroundImage: "linear-gradient(#191a1c, #1c2d52)" }}
    >
      {isPending || !poll ? (
        <CircularProgress />
      ) : (
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={{ xs: 12, sm: 6 }}>
            <IconButton
              onClick={() => {
                navigate("/");
              }}
            >
              <ArrowBackIcon
                style={{
                  color: "white",
                  height: 30,
                  width: 30,
                  position: "fixed",
                  top: 20,
                  left: 20,
                }}
              />
            </IconButton>
            <Card
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
              }}
            >
              <Container
                style={{
                  padding: "40px 20px",
                  borderBottom: "1px solid darkblue",
                  marginBottom: 20,
                }}
              >
                <Typography variant="h4" textAlign="center">
                  {poll.title}
                </Typography>
              </Container>
              {poll.options?.map((option, idx) => (
                <Container style={{ padding: "0 20px 20px 20px" }}>
                  <Button
                    variant="contained"
                    fullWidth
                    style={{
                      padding: 15,
                      textTransform: "none",
                    }}
                    onClick={() => {
                      callAddPollVote(option.id);
                    }}
                  >
                    <Typography>{option.title}</Typography>
                  </Button>
                </Container>
              ))}
            </Card>
          </Grid>
        </Grid>
      )}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={!!error}
        autoHideDuration={3000}
      >
        <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
          Error getting poll. Please try again later.
        </Alert>
      </Snackbar>
    </Container>
  );
};
