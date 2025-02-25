import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

import { getPoll } from "../../services/poll";
import { CardHeader } from "../shared/cardHeader";
import { ErrorSnackbar } from "../shared/errorSnackbar";
import { CardContentResult } from "../shared/cardContentResult";
import { CardContainer } from "../shared/cardContainer";

export default () => {
  const { pollId } = useParams();

  const {
    isPending,
    error,
    data: poll,
  } = useQuery({
    queryKey: [`poll-${pollId}-result`],
    queryFn: async () => {
      return await getPoll(pollId!);
    },
  });

  return (
    <CardContainer showLoading={isPending || !poll}>
      <CardHeader />
      <CardContentResult poll={poll!} />
      <ErrorSnackbar
        open={!!error}
        message={"Error fetching poll. Please try again later."}
      />
    </CardContainer>
  );
};
