import Paper from "@mui/material/Paper";
import FormTest01 from "@/features/form/ui/FormTest01";
import { Typography } from "@mui/material";
import FallbackComponentTest01 from "@/shared/ui-error-boundary/FallbackComponentTest01";
import { ErrorBoundary } from "react-error-boundary";
function FormTest01Component() {
  return (
    <>
      <Typography variant="h4" color="secondary">
        &lt;Paper
      </Typography>
      <Typography>elevation=&#123;3&#125; color="secondary"</Typography>
      <ErrorBoundary FallbackComponent={FallbackComponentTest01}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <FormTest01 />
        </Paper>
      </ErrorBoundary>
    </>
  );
}

export default FormTest01Component;
