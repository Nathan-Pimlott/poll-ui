import { Button, Container, Typography } from "@mui/material";
import { IPoll } from "../../types";

interface ICardContentProps {
  poll: IPoll;
  addPollVote: (id: string) => void;
}

export function PollContent({ poll, addPollVote }: ICardContentProps) {
  return (
    <>
      <Container id="poll-container">
        <Typography id="poll-title" variant="h4" textAlign="center">
          {poll.title}
        </Typography>
      </Container>
      {poll.options?.map((option, idx) => (
        <Container id="poll-option-container" key={idx}>
          <Button
            variant="contained"
            fullWidth
            className="poll-option-button"
            id={`poll-option-${idx}`}
            onClick={() => {
              addPollVote(option.id);
            }}
          >
            <Typography>{option.title}</Typography>
          </Button>
        </Container>
      ))}
    </>
  );
}
