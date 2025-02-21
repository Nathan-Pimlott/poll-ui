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
  LinearProgress,
  Snackbar,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { getPoll } from "../../services/poll";

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

  console.log({ poll });

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
                  Thanks for voting!
                </Typography>
                <Typography variant="h6" textAlign="center">
                  {poll.title}
                </Typography>
              </Container>
              {poll.options?.map((option) => (
                <Container style={{ padding: "0 20px 20px 20px" }}>
                  <div style={{ position: "relative", display: "flex" }}>
                    <LinearProgress
                      style={{ height: 54, width: "100%", borderRadius: 5 }}
                      variant="determinate"
                      value={((option.votes || 0) / poll.votes) * 100}
                    />
                    <Typography
                      style={{
                        position: "absolute",
                        color: "white",
                        top: 15,
                        left: 15,
                      }}
                    >
                      {option.title}
                    </Typography>
                    <Typography
                      style={{
                        position: "absolute",
                        color: "white",
                        top: 15,
                        right: 15,
                      }}
                    >
                      {(((option.votes || 0) / poll.votes) * 100).toFixed(0)}%
                    </Typography>
                  </div>
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
