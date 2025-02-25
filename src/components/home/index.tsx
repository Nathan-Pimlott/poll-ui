import { useQuery } from "@tanstack/react-query";
import { Container, LinearProgress, Typography } from "@mui/material";

import { getPolls } from "../../services/poll";
import HomeTable from "./table";
import { ErrorSnackbar } from "../shared/errorSnackbar";

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
    <Container className="padding">
      <Typography variant="h3" id="title">
        Active polls
      </Typography>
      <Typography id="subtitle">
        Click a poll to vote and view other users votes.
      </Typography>
      {isPending || !polls ? (
        <LinearProgress style={{ marginTop: 20 }} />
      ) : (
        <HomeTable polls={polls!} />
      )}
      <ErrorSnackbar
        open={!!error}
        message="Error getting polls. Please try again later."
      />
    </Container>
  );
};
