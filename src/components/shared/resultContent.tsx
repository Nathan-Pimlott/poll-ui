import { Container, Typography } from "@mui/material";
import { IPoll } from "../../types";
import { Results } from "./results";

interface ICardContentProps {
  poll: IPoll;
}

export function ResultContent({ poll }: ICardContentProps) {
  return (
    <>
      <Container id="result-container">
        <Typography id="result-title" variant="h4" textAlign="center">
          Thanks for voting!
        </Typography>
        <Typography id="result-subtitle" variant="h6" textAlign="center">
          {poll.title}
        </Typography>
      </Container>
      {poll.options?.map((option, idx) => (
        <Results key={idx} option={option} totalVotes={poll.votes} />
      ))}
    </>
  );
}
