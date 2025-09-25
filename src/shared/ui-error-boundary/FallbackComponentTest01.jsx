import { Box, Button, Typography } from "@mui/material";
import { useErrorBoundary } from "react-error-boundary";

function FallbackComponentTest01({ error }) {
  const { resetBoundary } = useErrorBoundary();
  return (
    <div className="practiceWrap">
      <Box>
        <Typography>
          eroor.message (моє повідомлення в FallbackComponent - отримаю його з
          форми (з fn -onSubmit)): {error.message}
        </Typography>
        <Button variant="contained" onClick={resetBoundary}>
          Reset
        </Button>
      </Box>
    </div>
  );
}

export default FallbackComponentTest01;
