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
      style={{
        backgroundImage: "linear-gradient(#191a1c, #1c2d52)",
        display: showLoading ? "flex" : "block",
        margin: 0,
        maxWidth: "none",
      }}
    >
      {showLoading ? (
        <CircularProgress />
      ) : (
        <Grid container alignItems="center" justifyContent="center">
          <Grid
            size={{ xs: 12, sm: 9, md: 6 }}
            style={{ padding: "70px 20px" }}
          >
            <Card
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
              }}
            >
              {children}
            </Card>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
