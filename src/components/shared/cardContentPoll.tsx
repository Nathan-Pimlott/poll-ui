import { Button, Container, Typography } from "@mui/material";
import { IPoll } from "../../types";

interface ICardContentProps {
  poll: IPoll;
  addPollVote: (id: string) => void;
}

export function CardContentPoll({ poll, addPollVote }: ICardContentProps) {
  return (
    <>
      <Container
        style={{
          padding: "40px 20px",
          borderBottom: "1px solid #1c2d52",
          marginBottom: 20,
        }}
      >
        <Typography variant="h4" textAlign="center">
          {poll.title}
        </Typography>
      </Container>
      {poll.options?.map((option, idx) => (
        <Container style={{ padding: "0 20px 20px 20px" }} key={idx}>
          <Button
            variant="contained"
            fullWidth
            style={{
              padding: 15,
              textTransform: "none",
            }}
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
