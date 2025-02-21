import { useQuery } from "@tanstack/react-query";
import {
  Alert,
  Container,
  LinearProgress,
  Snackbar,
  Typography,
} from "@mui/material";

import { getPolls } from "../../services/poll";
import HomeTable from "./table";

export default () => {
  const {
    isPending,
    error,
    data: polls,
  } = useQuery({
    queryKey: ["polls"],
    queryFn: async () => {
      return await getPolls();
    },
  });

  return (
    <Container style={{ padding: 20 }}>
      <Typography variant="h3">Active polls</Typography>
      <Typography>Click a poll to vote and view other users votes.</Typography>
      {isPending || !polls ? (
        <LinearProgress style={{ marginTop: 20 }} />
      ) : (
        <HomeTable polls={polls!} />
      )}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={!!error}
        autoHideDuration={3000}
      >
        <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
          Error getting polls. Please try again later.
        </Alert>
      </Snackbar>
    </Container>
  );
};
