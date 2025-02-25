import { useNavigate } from "react-router";
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import { IPoll } from "../../types";

interface IProps {
  polls: IPoll[];
}

const columns = ["Title", "Total Votes", "Options"];

export default ({ polls }: IProps) => {
  const navigate = useNavigate();

  return (
    <TableContainer component={Paper} style={{ marginTop: 10 }}>
      <Table id="poll-table">
        <TableHead>
          <TableRow>
            {columns.map((column, idx) => (
              <TableCell key={idx}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {polls?.map((poll, idx) => (
            <TableRow
              key={idx}
              sx={{
                cursor: "pointer",
              }}
              hover
              onClick={() => {
                navigate(`/poll/${poll.id}`);
              }}
            >
              <TableCell>{poll.title}</TableCell>
              <TableCell>{poll.votes}</TableCell>
              <TableCell>{poll.options?.length || 0}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
