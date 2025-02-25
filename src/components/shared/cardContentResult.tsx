import { Container, Typography } from "@mui/material";
import { IPoll } from "../../types";
import { Results } from "./results";

interface ICardContentProps {
  poll: IPoll;
}

export function CardContentResult({ poll }: ICardContentProps) {
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
        <Container style={{ padding: "0 20px 20px 20px" }} key={idx}>
          <Results option={option} totalVotes={poll.votes} />
        </Container>
      ))}
    </>
  );
}
