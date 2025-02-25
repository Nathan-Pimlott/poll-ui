import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";

import { addPollVote, getPoll } from "../../services/poll";
import { CardHeader } from "../shared/cardHeader";
import { PollContent } from "../shared/pollContent";
import { ErrorSnackbar } from "../shared/errorSnackbar";
import { CardContainer } from "../shared/cardContainer";
import { useState } from "react";

export default () => {
  const { pollId } = useParams();
  const navigate = useNavigate();
  const [addVoteError, setAddVoteError] = useState<boolean>(false);

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
    } catch (error) {
      setAddVoteError(true);
    }
  }

  const showLoading = isPending || !poll;

  return (
    <CardContainer showLoading={showLoading}>
      <CardHeader />
      <PollContent poll={poll!} addPollVote={callAddPollVote} />
      <ErrorSnackbar
        open={!!error || addVoteError}
        message={
          addVoteError
            ? "Error adding vote for poll. Please try again later."
            : "Error fetching poll. Please try again later."
        }
      />
    </CardContainer>
  );
};
