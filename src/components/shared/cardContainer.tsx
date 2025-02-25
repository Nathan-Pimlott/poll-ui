import {
  Card,
  CircularProgress,
  Container,
  Grid2 as Grid,
} from "@mui/material";

interface ICardContainerProps {
  showLoading: boolean;
  children: any;
}

export function CardContainer({ showLoading, children }: ICardContainerProps) {
  return (
    <Container
      disableGutters
      id="card-container"
      style={{ display: showLoading ? "flex" : "block" }}
    >
      {showLoading ? (
        <CircularProgress />
      ) : (
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={{ xs: 12, sm: 9, md: 6 }} className="padding">
            <Card id="card">{children}</Card>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
