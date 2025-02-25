import { IPoll } from "../types";
import { get, post } from "../utils/request";

export async function getPolls(): Promise<IPoll[]> {
  const pollsRes = await get("/polls");

  if (pollsRes.error) {
    throw Error("Error getting polls. Please try again later.");
  }

  return pollsRes.data as IPoll[];
}

export async function getPoll(pollId: string): Promise<IPoll> {
  const pollRes = await get(`/poll/${pollId}`);

  if (pollRes.error) {
    throw Error("Error getting poll. Please try again later.");
  }

  return pollRes.data as IPoll;
}

export async function addPollVote(pollId: string, optionId: string) {
  const addVoteRes = await post("/vote", { pollId, optionId });

  if (addVoteRes.error) {
    throw Error("Error getting poll. Please try again later.");
  }

  return addVoteRes.data as IPoll;
}
