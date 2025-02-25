import { LinearProgress, Typography } from "@mui/material";
import { IPollOption } from "../../types";

interface IResultProgressProps {
  option: IPollOption;
  totalVotes: number;
}

export function Results({ option, totalVotes }: IResultProgressProps) {
  return (
    <div id="result-option-container">
      <LinearProgress
        id="result-option-bar"
        variant="determinate"
        value={((option.votes || 0) / totalVotes) * 100}
      />
      <Typography id="result-option-title">{option.title}</Typography>
      <Typography id="result-option-value">
        {(((option.votes || 0) / totalVotes) * 100).toFixed(0)}%
      </Typography>
    </div>
  );
}
