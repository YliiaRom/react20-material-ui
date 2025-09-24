import Button from "@mui/material/Button";
import { Box, Rating, Typography } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Stack from "@mui/material/Stack";

function ButtonComponentMain() {
  const [num, setNum] = useState(0);

  const handleClick = () => {
    setNum((v) => v + 1);
  };
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });
  return (
    <>
      <Box sx={{ p: 2, border: "2px dashed grey", borderRadius: 5 }}>
        <Typography variant="h4" color="error">
          Button
        </Typography>
        <Button variant="contained" onClick={handleClick} sx={{ mb: 2 }}>
          Hello world
        </Button>
        <div className="practiceWrap">
          <Typography variant="button" align="center">
            змінити число при кліку: {num && num}
          </Typography>
          <Button variant="contained" onClick={handleClick}>
            Hello world
          </Button>
        </div>
        <Stack direction={{ xs: "column", md: "row" }} sx={{ mt: 2 }}>
          <div>
            <Button color="secondary">Secondary</Button>
            <Button variant="contained" color="success">
              Success
            </Button>
            <Button variant="outlined" color="error">
              Error
            </Button>
          </div>
        </Stack>
      </Box>

      {/* ====Stack */}
      <Box sx={{ p: 2, border: "2px dashed grey" }} className="practiceWrap">
        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <Typography variant="h4" component="span" color="success">
            Stack
          </Typography>
          <Button
            variant="contained"
            href="https://mui.com/material-ui/react-stack/"
            target="_blank"
          >
            Link
          </Button>
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          sx={{ mb: 2 }}
        >
          <Button variant="contained">Contained</Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" href="#contained-buttons">
            Link
          </Button>
        </Stack>
      </Box>

      {/* ==========Rating */}
      <Box sx={{ p: 1, border: "2px dashed #999" }}>
        {" "}
        <Typography color="secondary" variant="h4" component="body2">
          Rating
        </Typography>
        <Button
          variant="contained"
          href="https://mui.com/material-ui/react-rating/"
          target="_blank"
        >
          Link
        </Button>
        <Typography variant="subtitle" component="p">
          &lt;Typography color="secondary" component="body1"&gt;...
        </Typography>
        <Rating
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          readOnly
          sx={{ p: 0, m: 0 }}
        />
        <Rating
          name="size-small"
          defaultValue={1}
          size="large"
          sx={{ letterSpacing: 1 }}
        />
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        <StyledRating
          name="customized-color"
          defaultValue={2}
          getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
      </Box>
    </>
  );
}

export default ButtonComponentMain;
