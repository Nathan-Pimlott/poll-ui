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

export default ({ polls }: IProps) => {
  const navigate = useNavigate();
  return (
    <TableContainer component={Paper} style={{ marginTop: 10 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Total votes</TableCell>
            <TableCell>Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {polls?.map((poll) => (
            <TableRow
              key={poll.id}
              sx={{
                // "&:last-child td, &:last-child th": { border: 0 },
                cursor: "pointer",
              }}
              hover
              onClick={() => {
                navigate(`/poll/${poll.id}`);
              }}
            >
              <TableCell component="th" scope="row">
                {poll.title}
              </TableCell>
              <TableCell>{poll.votes}</TableCell>
              <TableCell>{poll.options?.length || 0}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
